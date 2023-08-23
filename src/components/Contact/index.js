import React, { useState } from "react";
import "./index.css";
import tick from "../../assets/tick.png";
import Reveal from "../utils/Reveal";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const emailSubit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lookscoutbackend.onrender.com/sendEmail",
        {
          email: email,
        }
      );
      console.log("Email sent", response);
      setEmail("");
      alert("Email Sent successfully");
      // Update state or UI with the retrieved text
    } catch (error) {
      if (error.message == "Request failed with status code 500") {
        setEmail("");
        alert("Email Already Exists");
      }
      console.error("Error getting text:", error);
    }
  };
  return (
    <div id="contact" className="contact-container">
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
        <form onSubmit={emailSubit} className="contact-box">
          <input
            className="contact-input"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
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
