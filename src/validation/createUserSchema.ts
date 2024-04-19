import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z
    .string()
    .trim()
    .transform((value) => value.replace(/\s+/g, ""))
    .pipe(z.string().min(1, { message: "Name is required" })),
  gender: z.string().min(1, "Gender is required"),
  banned: z.boolean(),
});

export type CreateUserType = z.infer<typeof CreateUserSchema>;
