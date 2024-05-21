"use client";

import { pb } from "@/lib/pocketbase";
import { FormEvent } from "react";

export default function Login() {
	async function formSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<main className="flex justify-center items-center w-screen h-screen">
			<form className="flex flex-col" onSubmit={formSubmit}>
				<h1 className="mb-2 font-bold tracking-tight text-3xl text-center">
					Sign in/Sign up
				</h1>
				<label htmlFor="emailInput">Email</label>
				<input
					type="email"
					name="email"
					id="emailInput"
					className="dark:bg-slate-800 dark:focus:bg-slate-700 p-2 outline-none transition-colors"
				/>
				<label htmlFor="passwordInput" className="mt-2">
					Password
				</label>
				<input
					type="password"
					name="password"
					id="passwordInput"
					className="dark:bg-slate-800 dark:focus:bg-slate-700 p-2 outline-none transition-colors"
				/>
				<input
					type="submit"
					value="Continue"
					className="mt-4 p-2 bg-slate-800 dark:hover:bg-slate-700 active:dark:bg-slate-600 transition-colors"
				/>
			</form>
		</main>
	);
}
