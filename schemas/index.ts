import { z } from "zod";

export const LoginSchema = z.object({
  // email: z.string().email(),
  email: z.string(),
  password: z.string()
});

export const RegisterSchema = z.object({
  // email: z.string().email(),
  email: z.string().email({
    message: "Please enter a valid email"
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters"
  }),
  name: z.string().min(1, {
    message: "Name is required"
  })
});

