import axios from "axios";
import {
  deleteTokensFromStorage,
  errorCatch,
  getAccessToken,
  getContentType,
} from "./helpers";
import { AuthService } from "@/features/auth/lib/auth-service";

export const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: getContentType(),
});

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (axios.isAxiosError(error)) {
      if (
        (error.response?.status === 401 ||
          errorCatch(error) === "jwt expired" ||
          errorCatch(error) === "jwt must be provided") &&
        !originalRequest._isRetry
      ) {
        originalRequest._isRetry = true;
        try {
          await AuthService.getNewTokens();
          return instance.request(originalRequest);
        } catch (error) {
          if (
            axios.isAxiosError(error) &&
            errorCatch(error) === "jwt expired"
          ) {
            deleteTokensFromStorage();
          }
        }
      }
    }

    return error;
  },
);
