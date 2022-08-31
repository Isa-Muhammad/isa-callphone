import React, { useState } from "react";
import Card from "../../components/ui/Card";
import Logo from "../../assets/logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input, Button } from "../../components/form";
import useLoginForm from "../../hooks/LoginForm";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Login = () => {
  const { register, onSubmit, errors, isValid } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);

  const toggleClass = (hasError) =>
    classNames("input", { "input-error": hasError });

  return (
    <div className="main auth-section">
      <div>
        <img alt="airgate" src={Logo} />
      </div>
      <div className="mt-6">
        <Card classes="auth-card">
          <div className="flex flex-col items-center">
            <h1 className=" font-bold text-xl">Welcome Back!</h1>
            <p className="text-sm mt-4">Log into your account</p>
          </div>
          <form onSubmit={onSubmit} className="mt-5">
            <div>
              <label className="text-sm text-gray-500">Username</label>
              <Input
                error={
                  errors.email && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )
                }
                register={register}
                name="email"
                classes={toggleClass(errors.email)}
                type="text"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Password</label>
              <Input
                error={
                  errors.password && (
                    <span className="error-message">
                      {errors.password.message}
                    </span>
                  )
                }
                register={register}
                name="password"
                classes={toggleClass(errors.password)}
                type={showPassword ? "text" : "password"}
                hasIcon
                iconName={
                  showPassword ? (
                    <AiOutlineEye size={22} />
                  ) : (
                    <AiOutlineEyeInvisible size={22} />
                  )
                }
                toogleIcon={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="auth-card-footer">
              <div className="flex">
                <input className="mr-2" type="checkbox" />
                <Link className="auth-card-links" to="/#">
                  Remember me
                </Link>
              </div>

              <Link className="auth-card-links" to="/#">
                Forgot password?
              </Link>
            </div>
            <Button
              // disabled={!isValid}
              classes="button primary wide mt-5"
              type="submit"
              // isRequesting={loginRequesting}
            >
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
