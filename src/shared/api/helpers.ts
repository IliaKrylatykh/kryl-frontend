import Cookies from "js-cookie";
import { AxiosError } from "axios";
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
  const accessToken = Cookies.get(TokenType.ACCESS);
  return accessToken || null;
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem(LocalStorage.USER) || "{}");
};

export const deleteTokensFromStorage = () => {
  Cookies.remove(TokenType.ACCESS);
  Cookies.remove(TokenType.REFRESH);
  localStorage.removeItem(LocalStorage.USER);
};
