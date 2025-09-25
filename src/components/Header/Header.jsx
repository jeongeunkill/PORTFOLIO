import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header-nav">
      <nav>
        <ul>
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/web">WEB</NavLink></li>
          <li><NavLink to="/graphic">GRAPHIC</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
