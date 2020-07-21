import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import menuBar from "../../assets/icons/menu-icon.png";
import closeMenuBar from "../../assets/icons/delete-icon.png";
import logoName from "../../assets/icons/logo-name.svg";

const Header = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handleShowMenuBar = () => {
    setShowMenuBar(!showMenuBar);
  };
  return (
    <header className="Header">
      <nav>
        <ul className="nav-logo p-0 px-2">
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
          <li>
            <NavLink to="/">
              <img src={logoName} alt="logo" height="150" className="my-4" />
            </NavLink>
          </li>
          <li className="nav-link pro">
            <NavLink to="/" className="pro">
              corTex pro
            </NavLink>
          </li>

          <li className="nav-link">
            <Link to="#about">services</Link>
          </li>
          <li className="nav-link border-bottom">
            <NavLink to="/">about</NavLink>
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
