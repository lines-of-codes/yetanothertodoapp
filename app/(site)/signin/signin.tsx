"use server";

import { pb } from "@/lib/pocketbase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function serverFormSubmit(formData: FormData) {
	const username = formData.get("username") as string;
	const password = formData.get("password") as string;

	await pb.collection("users").authWithPassword(username, password);

	cookies().set("pbLogin", pb.authStore.exportToCookie());

	redirect("/app");
}
