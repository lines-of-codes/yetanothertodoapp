"use server";

import { pb } from "@/lib/pocketbase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function handleAuth() {
    const loginCookie = cookies().get("pbLogin");

    if (loginCookie === undefined) {
        redirect("/signin");
    }

    pb.authStore.loadFromCookie(loginCookie.value);

    try {
        pb.authStore.isValid && (await pb.collection("users").authRefresh());
    } catch (_) {
        pb.authStore.clear();
        redirect("/signin");
    }
}