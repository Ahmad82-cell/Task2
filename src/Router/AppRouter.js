import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// this is layouts
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";

// this is pages
import Home from "../page/user/Home";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";
import ForgotPassword from "../page/auth/ForgotPassword";
import DashBoard from "../page/admin/DashBoard";


import ProtectedRoute from "./ProtectedRoute";
import About from "../page/user/About";

export default function AppRouter() {
  return (
    <Routes>
      
      {/* this is user router */}
      <Route element={
          <ProtectedRoute allowed={["user"]}>
            <UserLayout />
          </ProtectedRoute>
        }>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      
      </Route>


      {/* this is admin router */}
      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      </Route>

      <Route element={
          <ProtectedRoute allowed={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="/admin/dashboard" element={<DashBoard/>} />
          
      </Route>
    </Routes>
  );
}
