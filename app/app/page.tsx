import { pb } from "@/lib/pocketbase";
import handleAuth from "@/lib/handleAuth";
import { FolderModel } from "@/lib/data/folders";
import { redirect } from "next/navigation";

export default async function App() {
	handleAuth();

	const folders = pb.collection("folders");
	const folderList = await folders.getFullList({ sort: "-created" });

	if (folderList.length === 0) {
		const newFolder = await folders.create({
			name: "Inbox",
			owner: pb.authStore.model?.id,
		} as FolderModel);

		redirect(`/app/${newFolder.id}/`);
	}

	redirect(`/app/${folderList[0].id}/`);

	return <main className="min-h-screen"></main>;
}
