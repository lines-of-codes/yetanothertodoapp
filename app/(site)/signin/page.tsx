"use client";

import { useRef } from "react";
import { serverFormSubmit } from "./signin";
import Link from "next/link";

export default function Login() {
	const submitBtn = useRef(null);

	async function formSubmit(formData: FormData) {
		if (submitBtn.current !== null) {
			(submitBtn.current as HTMLInputElement).disabled = true;
		}

		const info = await serverFormSubmit(formData);

		if (info !== undefined && info.status === "error") {
			alert(`Error: ${info.reason}`);
		}

		if (submitBtn.current !== null) {
			(submitBtn.current as HTMLInputElement).disabled = false;
		}
	}

	return (
		<main className="flex justify-center items-center w-screen h-screen">
			<form className="flex flex-col" action={formSubmit}>
				<h1 className="mb-2 font-bold tracking-tight text-3xl text-center">
					Sign in
				</h1>
				<label htmlFor="emailInput">Username or Email</label>
				<input
					type="text"
					name="username"
					id="usernameInput"
					className="p-2 outline-none"
				/>
				<label htmlFor="passwordInput" className="mt-2">
					Password
				</label>
				<input
					type="password"
					name="password"
					id="passwordInput"
					className="p-2 outline-none"
				/>
				<input
					type="submit"
					value="Sign in"
					className="mt-4 mb-2 p-2"
					ref={submitBtn}
				/>
				<p>
					Don't have an account yet?{" "}
					<Link href="/signup">Sign up here.</Link>
				</p>
			</form>
		</main>
	);
}
