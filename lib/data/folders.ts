import { RecordModel } from "pocketbase";
import { UserModel } from "./users";

export interface FolderModel extends RecordModel {
    owner: string | UserModel;
    collaborators: string[] | UserModel[];
    name: string;
    public: boolean;
}