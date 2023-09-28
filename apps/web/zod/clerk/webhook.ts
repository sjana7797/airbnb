import { z } from "zod";

export const createUserSchema = z.object({
  evt: z.any(),
});
