/**
 * TypeScript data types for "users" table on PocketBase 
 * */

import { RecordModel } from "pocketbase";

export interface UserModel extends RecordModel {
    username: string;
    email: string;
    emailVisibility: boolean;
    verified: boolean;
    name: string;
    /// File name
    avatar: string;
    /// Only available on creation
    password: string | undefined;
    /// Only available on creation
    passwordConfirm: string | undefined;
}
