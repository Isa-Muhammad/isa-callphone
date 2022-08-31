import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/app/Dashboard";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Navigate to="/dashboard" />} path="/" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route path="/login" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default PrivateRoutes;
