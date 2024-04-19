import { z } from "zod";

export const EditAnimalSchema = z.object({
  name: z
    .string()
    .trim()
    .transform((value) => value.replace(/\s+/g, ""))
    .pipe(z.string().min(1, { message: "Name is required" })),
});

export type EditAnimalType = z.infer<typeof EditAnimalSchema>;
