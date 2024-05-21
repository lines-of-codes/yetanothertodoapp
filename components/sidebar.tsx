"use client";

import { useState } from "react";

export default function Sidebar() {
	const [folders, setFolders] = useState(["Inbox"]);

	return (
		<nav className="py-4 px-6 bg-slate-900">
			<h1 className="tracking-tight font-bold text-xl">
				Yet Another Todo App
			</h1>
			<ol>
				{folders.map((v) => {
					return (
						<li className="py-2 px-4 rounded hover:bg-slate-800 active:bg-slate-700 mt-2 transition-colors cursor-pointer">
							<button onClick={() => (window.location.href = v)}>
								{v}
							</button>
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
