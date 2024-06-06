export interface BasicError {
    status: "ok" | "error";
    reason: string;
}