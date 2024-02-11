import { cookies } from "next/headers";
import { AuthResponse } from "../model/types";
import { TokenType, Tokens } from "@/shared/types";

export const saveTokensToStorage = (data: Tokens) => {
  cookies().set(TokenType.ACCESS, data.accessToken);
  cookies().set(TokenType.REFRESH, data.refreshToken);
};

export const saveToStorage = (data: AuthResponse) => {
  saveTokensToStorage(data);
  localStorage.setItem("user", JSON.stringify(data.user));
};
