import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import hero from "../../assets/hero.png";
import heromd from "../../assets/hero-md.png";
import netflix from "../../assets/netflix.png";
import paypal from "../../assets/paypal.png";
import gitlab from "../../assets/gitlab.png";
import slack from "../../assets/slack.png";
import Reveal from "../utils/Reveal";
import axios from "axios";
import { UserContext } from "../../App";

const Hero = () => {
  const { text } = useContext(UserContext);
  useEffect(() => {}, [text]);
  return (
    <div className="hero-container">
      <div className="hero-details-container">
        <Reveal>
          <h1 className="hero-heading">{text}</h1>
        </Reveal>
        <Reveal>
          <p className="hero-para">
            We’ve been told it is not possible to overachieve our customers’
            expectations. We have not reinvented the wheel, we decided to build
            upon it.
          </p>
        </Reveal>
        <Reveal>
          <button className="hero-button">Get Started</button>
        </Reveal>
        <Reveal>
          <h1 className="hero-sub-heading">Who supports us</h1>
        </Reveal>
        <Reveal>
          <div className="hero-logo-container">
            <img src={gitlab} className="hero-logo" />
            <img src={slack} className="hero-logo" />
            <img src={netflix} className="hero-logo" />
            <img src={paypal} className="hero-logo" />
          </div>
        </Reveal>
      </div>
      <img src={hero} className="hero-image" />
      <img src={heromd} className="hero-image-md" />
    </div>
  );
};

export default Hero;
