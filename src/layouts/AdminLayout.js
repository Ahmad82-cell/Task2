import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ButtonHome from "../components/ButtonHome";
import BackButton from "../components/BackButton";
import Sidebar from "../components/SidBar";

 function adminLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "250px",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <Sidebar />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />

        <div
          style={{
            display: "flex",
            justifyContent: "right",
            margin: "20px",
          }}
        >
          <BackButton />
        </div>

        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default adminLayout;
