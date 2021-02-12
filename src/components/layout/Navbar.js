import React, { useState } from "react";
import "../../assets/styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="wrapper">
      <h1>O</h1>
      <div className="menu">
        <ul>
          <li>About</li>
          <li
            style={{
              padding: "25px",
            }}
          >
            Portfolio
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
