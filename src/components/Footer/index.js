import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="company-info-container">
          <img className="logo" src={logo} />
          <p className="company-description">
            Generate outside the box thinking with the possibility to targtet
            the low.
          </p>
        </div>
        <div className="footer-links-container">
          <div className="link-box">
            <span className="link-heading">Resources</span>
            <Link className="footer-link">Home</Link>
            <Link className="footer-link">Our Products</Link>
            <Link className="footer-link">Home</Link>
            <Link className="footer-link">Our Products</Link>
          </div>
          <div className="link-box">
            <span className="link-heading">Resources</span>
            <Link className="footer-link">Home</Link>
            <Link className="footer-link">Our Products</Link>
            <Link className="footer-link">Home</Link>
            <Link className="footer-link">Our Products</Link>
          </div>
        </div>
        <div className="footer-email-container">
          <span className="link-heading">Get Email Notifications</span>
          <span className="footer-link">
            Generate outside the box thinking with the possibility to targtet
            the low
          </span>
          <div className="footer-input-container">
            <input placeholder="Enter email...." className="footer-input" />
            <button className="submit-button margin-error">Submit</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <h1 className="copyright-text">
          © 2023 Lookscout. All Rights Reserved.
        </h1>
        <div className="social-container">
          <BiLogoFacebookCircle className="social-logo" />
          <AiOutlineGoogle className="social-logo" />
          <AiFillApple className="social-logo" />
          <AiOutlineInstagram className="social-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
