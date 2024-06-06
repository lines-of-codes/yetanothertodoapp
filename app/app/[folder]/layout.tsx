import { getFolderList } from "@/lib/getFolderList";
import "@/app/globals.css";
import Sidebar from "@/components/sidebar";

export default async function RootLayout({
	params,
	children,
}: Readonly<{
	params: { folder: string };
	children: React.ReactNode;
}>) {
	const list = await getFolderList();

	return (
		<div className="flex">
			<Sidebar folderList={list} folder={params.folder} />
			{children}
		</div>
	);
}
