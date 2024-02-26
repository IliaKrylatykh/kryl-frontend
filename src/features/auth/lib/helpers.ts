import Cookies from "js-cookie";
import { AuthResponse } from "../model/types";
import { TokenType, Tokens } from "@/shared/types";

export const saveTokensToStorage = (data: Tokens) => {
  Cookies.set(TokenType.ACCESS, data.accessToken);
  Cookies.set(TokenType.REFRESH, data.refreshToken);
};

export const saveToStorage = (data: AuthResponse) => {
  saveTokensToStorage(data);
  localStorage.setItem("user", JSON.stringify(data.user));
};
