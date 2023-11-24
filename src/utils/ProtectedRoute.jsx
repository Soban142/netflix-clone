import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  if (user === null) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
