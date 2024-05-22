"use server";

import { pb } from "@/lib/pocketbase";
import { redirect } from "next/navigation";

export async function serverFormSubmit(formData: FormData) {
	const username = formData.get("username") as string;
	const password = formData.get("password") as string;

	await pb.collection("users").authWithPassword(username, password);
	redirect("/app");
}
