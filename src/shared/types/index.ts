export enum TokenType {
  ACCESS = "accessToken",
  REFRESH = "refreshToken",
}

export enum LocalStorage {
  USER = "user",
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
