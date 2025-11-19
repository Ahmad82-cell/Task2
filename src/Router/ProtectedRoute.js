import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowed }) {
  const role = localStorage.getItem("role");

  // إذا ما في تسجيل دخول → يروح على Login
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  // إذا الدور غير مسموح → يروح على Login
  if (!allowed.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}