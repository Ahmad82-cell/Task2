import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role"); // قراءة الدور

  // تسجيل الخروج
  const logout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container>

        <Navbar.Brand style={{ fontWeight: "bold" }}>
         Task2
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            {/* رابط المستخدم يظهر فقط للمستخدم */}
            {role === "user" && (
              <Nav.Link as={NavLink} to="/home">
                صفحة المستخدم
              </Nav.Link>
            )}

              {role === "user" && (
              <Nav.Link as={NavLink} to="/About">
                معلومات عنا 
              </Nav.Link>
            )}

            {/* رابط الأدمن يظهر فقط للأدمن */}
            {role === "admin" && (
              <Nav.Link as={NavLink} to="/admin/dashboard">
                لوحة التحكم
              </Nav.Link>
            )}

          </Nav>

          {/* زر تسجيل الخروج */}
          {role && (
            <button
              onClick={logout}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "7px 15px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              تسجيل الخروج
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}