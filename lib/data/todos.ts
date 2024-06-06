import { RecordModel } from "pocketbase";
import { FolderModel } from "./folders";

export interface TodoModel extends RecordModel {
    folder: string | FolderModel;
    title: string;
    deadline: any;
    description: string;
    completed: boolean;
}