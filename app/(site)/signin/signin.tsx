"use server";

import { BasicError } from "@/lib/data/basicError";
import { pb } from "@/lib/pocketbase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ClientResponseError } from "pocketbase";

export async function serverFormSubmit(
	formData: FormData
): Promise<BasicError | undefined> {
	const username = formData.get("username") as string;
	const password = formData.get("password") as string;

	try {
		await pb.collection("users").authWithPassword(username, password);
	} catch (err: any) {
		return {
			status: "error",
			reason: (err as ClientResponseError).message,
		};
	}

	cookies().set("pbLogin", pb.authStore.exportToCookie());

	redirect("/app");
}
