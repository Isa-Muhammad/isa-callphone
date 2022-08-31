import { LoginActionConstants } from "../../action-constants";

export const setAuthenticated = (isAuthenticated) => ({
  type: LoginActionConstants.SET_AUTHENTICATED,
  isAuthenticated,
});

export const loginRequesing = () => ({
  type: LoginActionConstants.LOGIN_REQUESTING,
});

export const loginSuccess = (user) => ({
  type: LoginActionConstants.LOGIN_SUCCESS,
  user,
});

export const loginFail = (error) => ({
  type: LoginActionConstants.LOGIN_FAIL,
  error,
});

export const resetLogin = () => ({
  type: LoginActionConstants.RESET_LOGIN,
});
