import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import menuBar from "../../assets/icons/menu-icon.png";

const Header = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handleShowMenuBar = () => {
    setShowMenuBar(!showMenuBar);
  };
  return (
    <header className="Header">
      <nav>
        <ul className="nav-logo">
          <li className="join-sm"></li>

          <li className="logo-link">
            <NavLink to="/">
              <span className="logo">
                <span>JOB</span>HUB
              </span>
            </NavLink>
          </li>
          <li className="toggle" onClick={handleShowMenuBar}>
            <img src={menuBar} alt="menu-bar" />
          </li>
        </ul>
        <ul className={showMenuBar ? "nav-item show" : "nav-item hide"}>
          <li className="nav-link pro">
            <NavLink to="/" className="pro">
              jobHub pro
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink to="/">become a seller</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="forms/signin.html">sign in</NavLink>
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
