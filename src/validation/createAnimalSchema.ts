import { z } from "zod";

const AGE_ERROR_MESSAGE = "Age must be between 0-99 years"

export const CreateAnimalSchema = z.object({
  name: z
    .string()
    .transform((value) => value.replace(/\s+/g, ""))
    .pipe(z.string().min(1, { message: "Name is required" })),
  type: z.string().min(1, "Type is required"),
  age: z.union([
    z
      .number()
      .int()
      .positive()
      .min(0, AGE_ERROR_MESSAGE)
      .max(99, AGE_ERROR_MESSAGE),
    z.nan(),
  ]),
});

export type CreateAnimalType = z.infer<typeof CreateAnimalSchema>;
