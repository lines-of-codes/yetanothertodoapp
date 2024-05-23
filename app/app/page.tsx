import { pb } from "@/lib/pocketbase";
import handleAuth from "./handleAuth";

export default async function App() {
	handleAuth();

	console.log(pb.collection("folders").getFullList({ sort: "-created" }));

	return <main className="min-h-screen"></main>;
}
