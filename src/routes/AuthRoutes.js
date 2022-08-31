import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";

const AuthRoutes = () => (
  <Routes>
    <Route element={<Login />} path="/login" />
    <Route path="*" element={<Login />} />
  </Routes>
);

export default AuthRoutes;
