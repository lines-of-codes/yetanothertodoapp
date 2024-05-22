"use client";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="tracking-tight text-2xl font-bold">
				Yet Another Todo App
			</h1>
			<div className="flex gap-2">
				<button
					onClick={() => (window.location.href = "/signin")}
					className="rounded mt-2 p-2"
				>
					Sign in
				</button>
				<button
					onClick={() => (window.location.href = "/signup")}
					className="rounded mt-2 p-2"
				>
					Sign up
				</button>
			</div>
		</main>
	);
}
