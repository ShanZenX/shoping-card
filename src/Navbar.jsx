import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
export default function Navbar({ cart }) {
  return (
    <div className="navbar-head">
      <nav className="navbar">
        <ul>
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
          <li>
            <NavLink to="./kids" className="link-item">
              <MdShoppingCart />
              {cart.length}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
