import React from "react";
import { Link } from "react-scroll";
import "../../assets/styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="wrapper">
      <h1>O</h1>
      <div className="menu">
        <ul>
          <li
            style={{
              padding: "25px",
            }}
          >
            <Link to="projects" spy={true} smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
