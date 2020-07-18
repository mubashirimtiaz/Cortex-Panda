import React, { useState } from "react";
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
            <a href="index.html">
              <span className="logo">
                <span>JOB</span>HUB
              </span>
            </a>
          </li>
          <li className="toggle" onClick={handleShowMenuBar}>
            <img src={menuBar} alt="menu-bar" />
          </li>
        </ul>
        <ul className={showMenuBar ? "nav-item show" : "nav-item hide"}>
          <li className="nav-link pro">
            <a href="404/index.html" className="pro">
              jobHub pro
            </a>
          </li>
          {/* <li className="nav-link"><a href="">link</a></li> */}
          {/* <li className="nav-link"><a href="">link</a></li> */}
          <li className="nav-link">
            <a href="404/index.html">become a seller</a>
          </li>
          <li className="nav-link">
            <a href="forms/signin.html">sign in</a>
          </li>
          <li className="nav-link join-md">
            <a href="forms/signup.html">
              <button className="joinbtn">Join</button>
            </a>
          </li>
        </ul>
        {/* <ul className="join-md">
                <li>
                    <a href="">
                        Join
                    </a>
                </li>
            </ul>  */}
      </nav>
    </header>
  );
};

export default Header;
