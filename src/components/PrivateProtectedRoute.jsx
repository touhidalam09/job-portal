import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";

function PrivateProtectedRoute(props) {
  //   let { user } = useUserAuth();
  let { user } = false;

  return user ? <Dashboard /> : <Navigate to="/" />;
}

export default PrivateProtectedRoute;
