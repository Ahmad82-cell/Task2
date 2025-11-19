import React from "react";
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3 shadow"
      style={{ width: "250px", height: "100vh", position: "fixed", left: 0, top: 0 }}
    >
      <h2 className="mb-4 fw-bold">My App</h2>

      <NavLink
        to="/home"
        className={({ isActive }) =>
          `text-white text-decoration-none p-2 rounded mb-2 d-block ${
            isActive ? "bg-secondary" : ""
          }`
        }
      >
         Home
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `text-white text-decoration-none p-2 rounded mb-2 d-block ${
            isActive ? "bg-secondary" : ""
          }`
        }
      >
         Profile
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `text-white text-decoration-none p-2 rounded mb-2 d-block ${
            isActive ? "bg-secondary" : ""
          }`
        }
      >
         Settings
      </NavLink>
    </div>
  );
}