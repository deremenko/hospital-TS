import { ThunkAction } from 'redux-thunk';
import { Actions } from '../actions/user/index';
import { NewUser } from '../../components/Page/Registration/interface';
import { UserState } from '../reducers/user/interfase';
import { 
  registerUser, 
  authorizationUser, 
  logoutUser,
} from '../../services/user';

import {
  submitRegistration,
  submitRegistrationSuccess,
  submitRegistrationError,
  submitAuthorization,
  submitAuthorizationSuccess,
  submitAuthorizationError,
  startDeauthorization,
  deauthorizationSuccess,
  showDeauthorizationError,
} from '../actions/user/index';

export const registration = (newUser: NewUser): ThunkAction<void, UserState, unknown, Actions> => async (dispatch) => {
  try {
    dispatch(submitRegistration());
    
    const response = await registerUser(newUser);
    localStorage.setItem("token", response.accessToken)
    dispatch(submitRegistrationSuccess(response.user));
  } catch (error) {
    const errorMessage = (error as Error).message || 'Unknown error';
    dispatch(submitRegistrationError(errorMessage));
  }
};

export const authorization = (newUser: NewUser): ThunkAction<void, UserState, unknown, Actions> => async (dispatch) => {
  try {
    dispatch(submitAuthorization());
    
    const response = await authorizationUser(newUser);
    localStorage.setItem("token", response.accessToken)
    dispatch(submitAuthorizationSuccess());
  } catch (error) {
    const errorMessage = (error as Error).message || 'Unknown error';
    dispatch(submitAuthorizationError(errorMessage));
  }
};

export const logout = (): ThunkAction<void, UserState, unknown, Actions> => async (dispatch) => {
  try {
    dispatch(startDeauthorization());
    
    await logoutUser();
    localStorage.removeItem("token");
    dispatch(deauthorizationSuccess());
  } catch (error) {
    const errorMessage = (error as Error).message || 'Unknown error';
    dispatch(showDeauthorizationError(errorMessage));
  }
};


