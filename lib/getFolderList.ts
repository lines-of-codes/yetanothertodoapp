"use server";

import { FolderModel } from "@/lib/data/folders";
import handleAuth from "@/lib/handleAuth";
import { pb } from "@/lib/pocketbase";
import { cache } from "react";

export const getFolderList = cache(async () => {
    if (!pb.authStore.isValid) {
        handleAuth();
    }

    return (await pb.collection("folders").getFullList({ requestKey: "sidebar" })) as FolderModel[];
});
