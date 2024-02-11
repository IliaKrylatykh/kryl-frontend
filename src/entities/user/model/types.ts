export interface User {
  id: number;
  email: string;
  name: string;
  avatarPath: string;
  phone: string;
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
