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
            <a className="footer-link" href="/">
              Community
            </a>
            <a className="footer-link" href="/">
              Events
            </a>
            <a className="footer-link" href="/">
              Help Center
            </a>
            <a className="footer-link" href="/">
              Partners
            </a>
          </div>
          <div className="link-box">
            <span className="link-heading">Products</span>
            <a className="footer-link" href="/">
              Integrations
            </a>
            <a className="footer-link" href="/">
              Solutions
            </a>
            <a className="footer-link" href="/">
              Features
            </a>
            <a className="footer-link" href="/">
              Enterprise
            </a>
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
          © 2023{" "}
          <a style={{ textDecoration: "none", color: "grey" }} href="/">
            Lookscout
          </a>
          . All Rights Reserved.
        </h1>
        <div className="social-container">
          <a href="https://www.instagram.com/" target="__blank">
            <BiLogoFacebookCircle className="social-logo" />
          </a>
          <a href="https://www.google.com/" target="__blank">
            <AiOutlineGoogle className="social-logo" />
          </a>
          <a href="https://www.apple.com/" target="__blank">
            <AiFillApple className="social-logo" />
          </a>
          <a href="https://www.facebook.com/" target="__blank">
            <AiOutlineInstagram className="social-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
