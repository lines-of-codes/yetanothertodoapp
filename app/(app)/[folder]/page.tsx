export default function Folder({ params }: { params: { folder: string } }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="tracking-tight text-2xl font-bold">
				{params.folder}
			</h1>
		</main>
	);
}
