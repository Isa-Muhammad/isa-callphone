import { useCallback } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";

import { LoginSchema } from "../schema/LoginSchema";
// import { loginActionCreators } from "../store";

function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    resolver: yupResolver(LoginSchema),
  });

  // const dispatch = useDispatch();
  // const { login } = bindActionCreators(loginActionCreators, dispatch);

  const onSubmit = useCallback((formValues) => {
    // login(formValues);
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
  };
}

export default useLoginForm;
