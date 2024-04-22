/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div>
      <ul
        className="list-group list-group-horizontal"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/cart">Cart</Link>
        </li>
        <li style={{ marginLeft: "auto", padding: "15px" }}>
          <img src={assets.basket_icon} alt="Basket Icon" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
