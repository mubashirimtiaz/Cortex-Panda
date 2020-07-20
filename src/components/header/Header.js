import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import menuBar from "../../assets/icons/menu-icon.png";
import closeMenuBar from "../../assets/icons/delete-icon.png";

const Header = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handleShowMenuBar = () => {
    setShowMenuBar(!showMenuBar);
  };
  return (
    <header className="Header">
      <nav>
        <ul className="nav-logo p-0">
          <li className="join-sm"></li>

          <li className="logo-link">
            <NavLink to="/">
              <span className="logo">
                <span>COR</span>TEX
              </span>
            </NavLink>
          </li>
          <li className="toggle" onClick={handleShowMenuBar}>
            <img src={showMenuBar ? closeMenuBar : menuBar} alt="menu-bar" />
          </li>
        </ul>
        <ul className={showMenuBar ? "nav-item show" : "nav-item hide"}>
          <li className="nav-link pro">
            <NavLink to="/" className="pro">
              corTex pro
            </NavLink>
          </li>

          <li className="nav-link">
            <Link to="#about">about</Link>
          </li>
          <li className="nav-link">
            <NavLink to="/">sign in</NavLink>
          </li>
          <li className="nav-link join-md">
            <NavLink to="/">
              <button className="joinbtn">Join</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
