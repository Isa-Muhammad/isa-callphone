import { Dispatch } from "redux";
import axios from "axios";
import { PATH } from "../../../constants/paths";
import { LogoutActionTypes, LoginActionTypes } from "../action-types";

const { logoutRequesing, logoutSuccess, logoutFail } = LogoutActionTypes;

const { setAuthenticated } = LoginActionTypes;

export const logout = () => async (dispatch) => {
  dispatch(logoutRequesing());

  axios
    .post(PATH.logout)
    .then(() => {
      dispatch(logoutSuccess());
      dispatch(setAuthenticated(false));
    })
    .catch((e) => {
      let errorMessage = "";
      if (e.response) {
        errorMessage = "Test!";
      } else {
        errorMessage = e.message;
      }
      dispatch(logoutFail(errorMessage));
      dispatch(setAuthenticated(false));
    });
};
