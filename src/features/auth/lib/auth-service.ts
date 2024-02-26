import Cookies from "js-cookie";
import axios from "axios";
import { getContentType } from "@/shared/api/helpers";
import { AuthResponse } from "../model/types";
import { instance } from "@/shared/api/interceptor";
import { saveToStorage } from "./helpers";
import { AuthType } from "../model/types";
import { TokenType } from "@/shared/types";

const AUTH = "auth";

export const AuthService = {
  async main(type: AuthType.LOGIN | AuthType.REGISTER, data: Credential) {
    const response = await instance<AuthResponse>({
      url: `/${AUTH}/${type}`,
      method: "POST",
      data,
    });

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response.data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get(TokenType.REFRESH);

    const response = await axios.post<string, { data: AuthResponse }>(
      process.env.SERVER_URL + `/${AUTH}/login/access-token`,
      { refreshToken },
      {
        headers: getContentType(),
      },
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
};
