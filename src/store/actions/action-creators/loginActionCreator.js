import { PATH } from "../../../constants/paths";
import { LoginActionTypes } from "../action-types";
import axios from "axios";

const { loginSuccess, loginRequesing, loginFail, resetLogin } =
  LoginActionTypes;

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(resetLogin());
    dispatch(loginRequesing());

    const requestPayload = {
      email: email,
      password: password,
    };

    const timeout = {
      timeout: 5000,
      timeoutErrorMessage: "Network timeout. Please try again.",
    };
    axios
      .post(PATH.auth, requestPayload, timeout)
      .then((res) => {
        const accessToken = res.data.access_token;
        const bearerToken = `Bearer ${accessToken}`;
        axios.defaults.headers.common.Authorization = bearerToken;
        dispatch(loginSuccess());
      })
      .catch((e) => {
        let errorMessage = "";
        if (e.response) {
          errorMessage = "Good";
        } else {
          errorMessage = e.message;
        }
        dispatch(loginFail(errorMessage));
      });
  };
};
