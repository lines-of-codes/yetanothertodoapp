import { pb } from "@/lib/pocketbase";
import handleAuth from "@/lib/handleAuth";
import { FolderModel } from "@/lib/data/folders";
import { ClientResponseError, ListResult } from "pocketbase";
import { notFound } from "next/navigation";
import { TodoModel } from "@/lib/data/todos";
import TodoItem from "@/components/todo";

export default async function Folder({
	params,
}: {
	params: { folder: string };
}) {
	if (!pb.authStore.isValid) {
		handleAuth();
	}

	const folders = pb.collection("folders");

	let folder: FolderModel | undefined;
	try {
		folder = await folders.getOne(params.folder);
	} catch (err) {
		if ((err as ClientResponseError).status === 404) {
			notFound();
		}
	}

	const todos = (await pb
		.collection("todos")
		.getList(1, 50)) as ListResult<TodoModel>;

	return (
		<main className="flex min-h-screen flex-col p-24 grow">
			<h1 className="tracking-tight text-4xl font-bold">
				{folder?.name}
			</h1>
			{todos.items.length === 0 ? (
				<p>There are no items in this folder.</p>
			) : (
				<ul>
					{todos.items.map((v, i) => (
						<TodoItem key={i} todo={v} />
					))}
				</ul>
			)}
		</main>
	);
}
