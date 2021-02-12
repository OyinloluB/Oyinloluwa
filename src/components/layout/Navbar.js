import React, { useState } from "react";
import "../../assets/styles/navbar.scss";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <h1>
        Oyin<span>lolu</span>
      </h1>
      <div className="menu" onClick={() => setOpen(!isOpen)}>
        <span className="icon">
          <span className={`dot ${isOpen && "open"}`} />
          <span className={`dot ${isOpen && "open"}`} />
          <span className={`dot ${isOpen && "open"}`} />
          <span className={`rectangle first ${isOpen && "open"}`} />
          <span className={`rectangle ${isOpen && "open"}`} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
