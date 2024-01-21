import { z } from "zod";

export const LoginSchema = z.object({
  // email: z.string().email(),
  email: z.string(),
  password: z.string()
});