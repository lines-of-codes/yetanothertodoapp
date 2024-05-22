"use client";

import { useRef } from "react";
import { serverFormSubmit } from "./signup";

export default function Login() {
	const submitBtn = useRef(null);

	async function formSubmit(formData: FormData) {
		if (submitBtn.current != null) {
			(submitBtn.current as HTMLInputElement).disabled = true;
		}

		const result = await serverFormSubmit(formData);

		if (result instanceof Object && result.status === "error") {
			alert(result.reason);
		}

		if (submitBtn.current != null) {
			(submitBtn.current as HTMLInputElement).disabled = false;
		}
	}

	return (
		<main className="flex justify-center items-center w-screen h-screen">
			<form className="flex flex-col" action={formSubmit}>
				<h1 className="mb-2 font-bold tracking-tight text-3xl text-center">
					Sign up
				</h1>
				<label htmlFor="emailInput">Email</label>
				<input
					type="email"
					name="email"
					id="emailInput"
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
					value="Sign up"
					className="mt-4 p-2"
					ref={submitBtn}
				/>
			</form>
		</main>
	);
}
