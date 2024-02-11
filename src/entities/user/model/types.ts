export interface User {
  email: string;
  password?: string;
  name?: string;
  avatarPath?: string;
  phone?: string;
}

export interface UserState {
  email: string;
}

export interface UserInitialState {
  user: UserState | null;
  isLoading: string;
}

export interface Credentials {
  email: string;
  password: string;
}
