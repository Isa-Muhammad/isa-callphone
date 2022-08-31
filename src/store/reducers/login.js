import { LoginActionConstants } from "../action-constants";

const {
  SET_AUTHENTICATED,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RESET_LOGIN,
} = LoginActionConstants;

const initialState = {
  isAuthenticated: false,
  loginRequesting: false,
  user: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        loginRequesting: false,
      };
    case LOGIN_REQUESTING:
      return {
        ...state,
        loginRequesting: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginRequesting: false,
        user: action.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginRequesting: false,
        error: action.error,
      };
    case RESET_LOGIN:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
