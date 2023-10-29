import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-head">
      <nav className="navbar">
        <ul>
          {console.log("nav rendering")}
          <li>
            <NavLink to="/" className="link-item">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/mens" className="link-item">
              mens
            </NavLink>
          </li>
          <li>
            <NavLink to="/women" className="link-item">
              women
            </NavLink>
          </li>
          <li>
            <NavLink to="/Kids" className="link-item">
              Kids
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
