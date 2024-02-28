import { User } from "@/entities/user/model/types";
import { Tokens } from "@/shared/types";
import { z } from "zod";

export enum AuthType {
  LOGIN = "login",
  REGISTER = "register",
}

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export interface AuthResponse extends Tokens {
  user: User;
}
