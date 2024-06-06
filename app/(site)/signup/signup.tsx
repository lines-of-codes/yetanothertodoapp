"use server";

import { BasicError } from "@/lib/data/basicError";
import { UserModel } from "@/lib/data/users";
import { pb } from "@/lib/pocketbase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ClientResponseError } from "pocketbase";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export async function serverFormSubmit(
	formData: FormData
): Promise<BasicError | undefined> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const isEmail = emailRegex.test(email);

	if (!isEmail) {
		return {
			status: "error",
			reason: "Your input does not seem to be a valid email.",
		};
	}

	try {
		const users = pb.collection("users");
		await users.create({
			email: email,
			password: password,
			passwordConfirm: password,
		} as UserModel);

		await users.requestVerification(email);
	} catch (err: any) {
		return {
			status: "error",
			reason: (err as ClientResponseError).message,
		};
	}

	cookies().set("pbLogin", pb.authStore.exportToCookie());

	redirect("/app");
}
