import { ActionTypes, PayloadType, ErrorType } from "./interface"

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
} from "../../enums/user";

export const submitRegistration = (): ActionTypes => ({
  type: SUBMIT_REGISTRATION,
});

export const submitRegistrationSuccess = (payload: PayloadType): ActionTypes => ({
  type: SUBMIT_REGISTRATION_SUCCESS,
  payload,
});

export const submitRegistrationError = (error: ErrorType): ActionTypes => ({
  type: SUBMIT_REGISTRATION_ERROR,
  error,
});

export const submitAuthorization = (): ActionTypes => ({
  type: SUBMIT_AUTHORIZATION,
});

export const submitAuthorizationSuccess = (): ActionTypes => ({
  type: SUBMIT_AUTHORIZATION_SUCCESS,
});

export const submitAuthorizationError = (error: ErrorType): ActionTypes => ({
  type: SUBMIT_AUTHORIZATION_ERROR,
  error,
});

export const startDeauthorization = (): ActionTypes => ({
  type: START_DEAUTHORIZATION,
});

export const deauthorizationSuccess = (): ActionTypes => ({
  type: DEAUTHORIZATION_SUCCESS,
});

export const showDeauthorizationError = (error: ErrorType): ActionTypes => ({
  type: SHOW_DEAUTHORIZATION_ERROR,
  error,
});

export type Actions =
  | ReturnType<typeof submitRegistration>
  | ReturnType<typeof submitRegistrationSuccess>
  | ReturnType<typeof submitRegistrationError>
  | ReturnType<typeof submitAuthorization>
  | ReturnType<typeof submitAuthorizationSuccess>
  | ReturnType<typeof submitAuthorizationError>
  | ReturnType<typeof startDeauthorization>
  | ReturnType<typeof deauthorizationSuccess>
  | ReturnType<typeof showDeauthorizationError>;

