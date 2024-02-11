import { AuthResponse } from "@/features/auth/model/types";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { LocalStorage, TokenType } from "../types";

export const getContentType = () => ({
  "Content-Type": "application/json",
});

export const errorCatch = (error: AxiosError): string => {
  if (error.response) {
    const message = (error.response.data as { message?: string | string[] })
      .message;
    return Array.isArray(message) ? message[0] : message || error.message;
  }

  return error.message;
};

export const getAccessToken = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(TokenType.ACCESS);
  return accessToken || null;
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem(LocalStorage.USER) || "{}");
};

export const deleteTokensFromStorage = () => {
  cookies().delete(TokenType.ACCESS);
  cookies().delete(TokenType.REFRESH);
  localStorage.removeItem(LocalStorage.USER);
};
