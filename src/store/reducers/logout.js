import { LogoutActionConstants } from "../action-constants";

const { LOGOUT_REQUESTING, LOGOUT_SUCCESS, LOGOUT_FAIL } =
  LogoutActionConstants;

const initialState = {
  logoutRequesting: false,
  success: false,
  error: null,
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUESTING:
      return {
        ...state,
        logoutRequesting: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        success: true,
        logoutRequesting: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        logoutRequesting: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default logoutReducer;
