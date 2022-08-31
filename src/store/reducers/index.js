import { combineReducers } from "redux";

import loginReducer from "./login";
import logoutReducer from "./logout";

const reducers = combineReducers({
  loginReducer,
  logoutReducer,
});

export default reducers;
