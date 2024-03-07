export interface UserState {
  user:{
    login: string;
    password: string;
  };
  error: string | null;
  isAuth: boolean;
}