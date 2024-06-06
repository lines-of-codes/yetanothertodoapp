import { cookies } from "next/headers";
import "../globals.css";
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loginCookie = cookies().get("pbLogin");

	if (loginCookie !== undefined) {
		redirect("/app");
	}

	return children;
}
