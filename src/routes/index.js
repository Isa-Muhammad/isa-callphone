import React from "react";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";

const Routes = ({ status }) => {
  return status ? <PrivateRoutes /> : <AuthRoutes />;
};

export default Routes;
