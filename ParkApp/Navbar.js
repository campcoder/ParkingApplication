import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { RiEBikeFill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <AiFillCar className="navbar-icon" />
              MYSPACE
              <RiEBikeFill className="navbar-icon" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li id="dashboard" className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/parknow"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Park Now
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-in" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN IN</Button>
                  </Link>
                ) : (
                  <Link to="/sign-in" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      SIGN IN
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
