"use client";

import { FolderModel } from "@/lib/data/folders";
import { RegularCirclePlus } from "lineicons-react";
import { useRouter } from "next/navigation";

export default function Sidebar(props: {
	folderList: FolderModel[];
	folder: string;
}) {
	const router = useRouter();
	const listItemClass = "py-2 px-4 button rounded mt-2";

	return (
		<nav className="py-4 px-6 bg-slate-100 dark:bg-slate-900">
			<h1 className="tracking-tight font-bold text-xl">
				Yet Another Todo App
			</h1>
			<ol>
				<li className={listItemClass + " flex items-center"}>
					<RegularCirclePlus className="mr-2 text-lg fill-black dark:fill-white" />
					Add task
				</li>
				{props.folderList.map((v, i) => {
					return (
						<li
							key={i}
							className={
								props.folder === v.id
									? listItemClass + " active"
									: listItemClass
							}
							onClick={() => router.push(`/app/${v.id}`)}
						>
							{v.name}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
