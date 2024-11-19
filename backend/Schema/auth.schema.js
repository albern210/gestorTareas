import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is Required",
  }),
  email: z.string({
    required_error: "Email is Required",
  }),
  password: z.string({
      required_error: "Password is Required",
    })
    .min(5, {
      message: "Password must be at least 5 characters",
    }),
});

export const loginSchema = z.object({
  email: z.string({
      required_error: "Email is Required",
    }).email({
      message: "Invalid email",
    }),
  password: z.string({
      required_error: "Password is required",
    }).min(5, {
      message: "Password must be at least 5",
    }),
});
