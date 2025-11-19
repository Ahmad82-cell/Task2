import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ButtonHome from "../components/ButtonHome";
import BackButton from "../components/BackButton";

export default function UserLayout() {
  return (

      <div>
        <NavBar />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px",
            justifyContent: "space-between",
          }}
        >
          <ButtonHome />
          <BackButton />
        </div>

        <div style={{ margin: "20px" }}>
          <Outlet />
          
        </div>
      </div>

  );
}
