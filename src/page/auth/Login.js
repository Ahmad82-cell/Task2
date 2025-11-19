import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // دخول user
  const loginAsUser = () => {
    localStorage.setItem("role", "user");
    navigate("/home");
  };

  // دخول admin
  const loginAsAdmin = () => {
    localStorage.setItem("role", "admin");
    navigate("/admin/dashboard");
  };

  return (
    <div dir="rtl">
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          تسجيل الدخول
        </h2>

        <input
          type="email"
          placeholder="الايميل..."
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
        />

        <input
          type="password"
          placeholder="كلمة السر..."
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
        />

        <button
          onClick={loginAsUser}
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          دخول كمستخدم (User)
        </button>

        <button
          onClick={loginAsAdmin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          دخول كمسؤول (Admin)
        </button>

        <div className="text-center mb-3">
          <Link
            to="/forgotpassword"
            style={{ textDecoration: "none", color: "#0d6efd", fontWeight: "bold" }}
          >
            نسيت كلمة المرور ؟
          </Link>
        </div>

        <p style={{ textAlign: "center" }}>
          ليس لديك حساب ؟{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}
          >
            اضغط هنا
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;