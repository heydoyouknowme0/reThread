import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().min(1, { message: "Minimum 3 characters" }).max(1000),
  accountId: z.string(),
});
export const CommentValidation = z.object({
  thread: z.string().min(1, { message: "Minimum 3 characters" }).max(1000),
});
