import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div  dir="rtl">
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          تسجيل حساب جديد
        </h2>

        <input
          type="text"
          placeholder="اسم المستخدم..."
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
          type="email"
          placeholder="الإيميل..."
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
          style={{
            width: "100%",
            padding: "10px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          إنشاء الحساب
        </button>

        <p style={{ textAlign: "center" }}>
          لديك حساب بالفعل؟{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}
          >
            اضغط هنا
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;