interface User {
  id: number;
  email: string;
  name: string;
  avatarPath: string;
  phone: string;
}

interface UserState {
  email: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface UserInitialState {
  user: UserState | null;
  isLoading: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthResponse extends Tokens {
  user: User;
}
