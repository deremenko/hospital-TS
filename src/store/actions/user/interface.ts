import { 
  SUBMIT_REGISTRATION, 
  SUBMIT_REGISTRATION_SUCCESS, 
  SUBMIT_REGISTRATION_ERROR,
  SUBMIT_AUTHORIZATION,
  SUBMIT_AUTHORIZATION_SUCCESS,
  SUBMIT_AUTHORIZATION_ERROR,
  START_DEAUTHORIZATION,
  DEAUTHORIZATION_SUCCESS,
  SHOW_DEAUTHORIZATION_ERROR
} from "../../enums/user"

export type PayloadType = { login: string; password: string };
export type ErrorType = string | null;

export interface Action {
  type: string;
  payload: PayloadType;
  error: ErrorType;
}

interface SubmitRegistrationAction {
  type: typeof SUBMIT_REGISTRATION;
}

interface SubmitRegistrationSuccessAction {
  type: typeof SUBMIT_REGISTRATION_SUCCESS;
  payload: PayloadType;
}

interface SubmitRegistrationErrorAction {
  type: typeof SUBMIT_REGISTRATION_ERROR;
  error: ErrorType;
}

interface SubmitAuthorizationAction {
  type: typeof SUBMIT_AUTHORIZATION;
}

interface SubmitAuthorizationSuccessAction {
  type: typeof SUBMIT_AUTHORIZATION_SUCCESS;
}

interface SubmitAuthorizationErrorAction {
  type: typeof SUBMIT_AUTHORIZATION_ERROR;
  error: ErrorType;
}

interface StartDeauthorizationAction {
  type: typeof START_DEAUTHORIZATION;
}

interface DeauthorizationSuccessAction {
  type: typeof DEAUTHORIZATION_SUCCESS;
}

interface ShowDeauthorizationErrorAction {
  type: typeof SHOW_DEAUTHORIZATION_ERROR;
  error: ErrorType;
}

export type ActionTypes =
  | SubmitRegistrationAction
  | SubmitRegistrationSuccessAction
  | SubmitRegistrationErrorAction
  | SubmitAuthorizationAction
  | SubmitAuthorizationSuccessAction
  | SubmitAuthorizationErrorAction
  | StartDeauthorizationAction
  | DeauthorizationSuccessAction
  | ShowDeauthorizationErrorAction;
