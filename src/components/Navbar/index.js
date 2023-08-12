import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };
  const showDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className="nav-container">
      <div className="logo-link-container">
        <img className="logo" src={logo} />
        <div className="menu-container">
          <Link className="navbar-link">Home</Link>
          <Link className="navbar-link">Our Products</Link>
          <div class="dropdown">
            <Link className="navbar-link">
              Resource
              <RiArrowDropDownLine />
            </Link>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <Link className="navbar-link">Contacts</Link>
        </div>
      </div>
      <div className="login-register-container">
        <button className="login-button">Log in</button>
        <button className="signup-button">Sign up</button>
      </div>
      <div class="menu">
        <button className="mobile-menu-icon" onClick={showMenu}>
          {!menu ? (
            <AiOutlineMenu style={{ color: "white", fontSize: "20px" }} />
          ) : (
            <RiCloseLine style={{ color: "white", fontSize: "20px" }} />
          )}
        </button>
        {menu ? (
          <div class="menu-content">
            <a href="#">Home</a>
            <a href="#">Our Products</a>
            <a href="#" onClick={showDrop}>
              {" "}
              Resource
              <RiArrowDropDownLine />
            </a>
            {drop ? (
              <div>
                <a style={{ paddingLeft: "30px", fontSize: "12px" }} href="#">
                  Home
                </a>
                <a style={{ paddingLeft: "30px", fontSize: "12px" }} href="#">
                  Our Products
                </a>
              </div>
            ) : null}

            <a href="#">Contacts</a>
            <a href="#">Log in</a>
            <a href="#">Sign up</a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
