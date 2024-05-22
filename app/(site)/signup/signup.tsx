"use server";

import { UserModel } from "@/lib/data/users";
import { pb } from "@/lib/pocketbase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export async function serverFormSubmit(formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const isEmail = emailRegex.test(email);

	if (!isEmail) {
		return {
			status: "error",
			reason: "Your input does not seem to be a valid email.",
		};
	}

	const users = pb.collection("users");
	await users.create({
		email: email,
		password: password,
		passwordConfirm: password,
	} as UserModel);

	await users.requestVerification(email);

	cookies().set("pbLogin", pb.authStore.exportToCookie());

	redirect("/app");
}
