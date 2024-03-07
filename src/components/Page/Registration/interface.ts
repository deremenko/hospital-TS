export interface RegistrationProps {}

export interface UserData {
  value: string;
  error: string;
}

export interface RegistrationState {
  login: UserData;
  password: UserData;
  repeatPassword: UserData;
  [key: string]: UserData;
}

export interface NewUser {
  login: string;
  password: string;
}
