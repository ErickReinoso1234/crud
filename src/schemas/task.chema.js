import { z } from "zod";

export const createTaskchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(1, "Title cannot be empty"),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, "La descripción no puede estar vacía"),
});
