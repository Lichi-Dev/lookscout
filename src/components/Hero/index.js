import React from "react";
import "./index.css";
import hero from "../../assets/hero.png";
import heromd from "../../assets/hero-md.png";
import netflix from "../../assets/netflix.png";
import paypal from "../../assets/paypal.png";
import gitlab from "../../assets/gitlab.png";
import slack from "../../assets/slack.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-details-container">
        <h1 className="hero-heading">Your Supercharged Design Workflow.</h1>
        <p className="hero-para">
          We’ve been told it is not possible to overachieve our customers’
          expectations. We have not reinvented the wheel, we decided to build
          upon it.
        </p>
        <button className="hero-button">Get Started</button>
        <h1 className="hero-sub-heading">Who supports us</h1>
        <div className="hero-logo-container">
          <img src={gitlab} className="hero-logo" />
          <img src={slack} className="hero-logo" />
          <img src={netflix} className="hero-logo" />
          <img src={paypal} className="hero-logo" />
        </div>
      </div>
      <img src={hero} className="hero-image" />
      <img src={heromd} className="hero-image-md" />
    </div>
  );
};

export default Hero;
