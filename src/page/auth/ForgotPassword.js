import React from "react";

function ForgotPassword() {
  return (
    <div dir="rtl">
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>نسيت كلمة المرور</h2>
      <p style={{ textAlign: "center" }}>
        الرجاء إدخال بريدك الإلكتروني لإرسال رابط إعادة تعيين كلمة المرور.
      </p>

      <input
        type="email"
        placeholder="ادخل بريدك الإلكتروني"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          textAlign: "center"
        }}
      />

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        إرسال الرابط
      </button>
    </div>
  );
}

export default ForgotPassword;