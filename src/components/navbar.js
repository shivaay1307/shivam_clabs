import React from "react";

const Navbar = ({icon, title}) => {
  return (
    <nav className="nav">
      <span className="back-icon">{icon}</span>
      <p className="audience-head">{title}</p>
    </nav>
  );
};

export default Navbar;
