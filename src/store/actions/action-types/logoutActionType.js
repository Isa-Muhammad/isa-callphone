import { LogoutActionConstants } from "../../action-constants";

export const logoutRequesing = () => ({
  type: LogoutActionConstants.LOGOUT_REQUESTING,
});

export const logoutSuccess = () => ({
  type: LogoutActionConstants.LOGOUT_SUCCESS,
});

export const logoutFail = (error) => ({
  type: LogoutActionConstants.LOGOUT_FAIL,
  error,
});

export const resetLogout = () => ({
  type: LogoutActionConstants.RESET_LOGOUT,
});
