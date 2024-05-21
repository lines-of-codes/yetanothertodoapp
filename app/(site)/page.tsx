"use client";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="tracking-tight text-2xl font-bold">
				Yet Another Todo App
			</h1>
			<button
				onClick={() => (window.location.href = "/login")}
				className="rounded mt-2 p-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 active:dark:bg-slate-600 transition-colors"
			>
				Sign in/Sign up
			</button>
		</main>
	);
}
