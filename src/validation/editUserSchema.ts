import { z } from "zod";

export const EditUserSchema = z.object({
  name: z
    .string()
    .trim()
    .transform((value) => value.replace(/\s+/g, ""))
    .pipe(z.string().min(1, { message: "Name is required" })),
});

export type EditUserType = z.infer<typeof EditUserSchema>;
