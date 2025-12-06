import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>
        À Propos
      </NavLink>
      {" | "}
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
