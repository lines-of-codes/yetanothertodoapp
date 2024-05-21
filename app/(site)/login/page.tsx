"use client";

import { UserModel } from "@/lib/data/users";
import { pb } from "@/lib/pocketbase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useRef } from "react";

export default function Login() {
	const submitBtn = useRef(null);

	async function formSubmit(formData: FormData) {
		"use server";

		const username = formData.get("username") as string;
		const password = formData.get("password") as string;

		if (submitBtn.current != null) {
			(submitBtn.current as HTMLInputElement).disabled = true;
		}

		try {
			await pb.collection("users").authWithPassword(username, password);
			redirect("/app");
		} catch (err) {
			if (
				confirm(
					"Signing in with the username/email and password combination didn't work. Would you like to create a new account?"
				)
			) {
				const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
				const isEmail = emailRegex.test(username);

				const passwordConfirm = prompt("Please confirm your password");

				if (password != passwordConfirm) {
					alert(
						"bro what you've already forgotten your password? try again."
					);
				}

				const users = pb.collection("users");
				await users.create({
					email: isEmail ? username : undefined,
					username: isEmail ? undefined : username,
					password: password,
					passwordConfirm: passwordConfirm,
				} as UserModel);

				if (isEmail) {
					await users.requestVerification(username);
				}

				cookies().set("pbLogin", pb.authStore.exportToCookie());

				redirect("/app");
			}
		}

		if (submitBtn.current != null) {
			(submitBtn.current as HTMLInputElement).disabled = false;
		}
	}

	return (
		<main className="flex justify-center items-center w-screen h-screen">
			<form className="flex flex-col" action={formSubmit}>
				<h1 className="mb-2 font-bold tracking-tight text-3xl text-center">
					Sign in/Sign up
				</h1>
				<label htmlFor="emailInput">Username or Email</label>
				<input
					type="text"
					name="username"
					id="usernameInput"
					className="p-2 outline-none transition-colors"
				/>
				<label htmlFor="passwordInput" className="mt-2">
					Password
				</label>
				<input
					type="password"
					name="password"
					id="passwordInput"
					className="p-2 outline-none transition-colors"
				/>
				<input
					type="submit"
					value="Continue"
					className="mt-4 p-2 transition-colors"
					ref={submitBtn}
				/>
			</form>
		</main>
	);
}
