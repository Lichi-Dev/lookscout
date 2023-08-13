import React from "react";
import "./index.css";
import tick from "../../assets/tick.png";
import Reveal from "../utils/Reveal";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-sub-container">
        <Reveal>
          <h1 className="contact-heading">1% OF THE INDUSTRY</h1>
        </Reveal>
        <Reveal>
          <h1 className="contact-sub-heading">
            Welcome to your new digital reality that will rock your world truly
            at all throughout.
          </h1>
        </Reveal>
        <div className="contact-box">
          <input
            className="contact-input"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="submit-button">Submit</button>
        </div>
        <div className="contact-feature-container">
          <Reveal>
            <div className="contact-feature-box">
              <img className="contact-feature-logo" src={tick} />
              <p className="contact-feature-heading">Fully Secure</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact-feature-box">
              <img className="contact-feature-logo" src={tick} />
              <p className="contact-feature-heading">24/7 Support</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact-feature-box">
              <img className="contact-feature-logo" src={tick} />
              <p className="contact-feature-heading">Done Deal</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
