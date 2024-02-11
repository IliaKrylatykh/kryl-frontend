import { User } from "@/entities/user/model/types";
import { Tokens } from "@/shared/types";

export enum AuthType {
  LOGIN = "login",
  REGISTER = "register",
}

export interface AuthResponse extends Tokens {
  user: User;
}
