import React from "react";
import "./index.css";
import logoblack from "../../assets/logoblack.png";
import customer from "../../assets/customer.png";
import Reveal from "../utils/Reveal";

const Customer = () => {
  return (
    <div className="customer-container">
      <div className="customer-top-container">
        <Reveal>
          <h1 className="our-product-heading">What Our Customers Say</h1>
          <p className="our-product-para">
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment. Bring to the table win-win
            strategies to ensure domination.
          </p>
        </Reveal>
      </div>
      <div className="customer-bottom-container">
        <Reveal>
          <img className="customer-logo" src={logoblack} />
        </Reveal>
        <Reveal>
          <h1 className="customer-heading">
            Thank you for making it painless, pleasant and most of all hassle
            free! I love LookScout. I can't say enough about LookScout. Great
            job, I will definitely be ordering again!
          </h1>
        </Reveal>
        <div className="customer-details">
          <Reveal>
            <img className="customer-image" src={customer} />
          </Reveal>
          <div>
            <Reveal>
              <h1 className="customer-name ">Lisa Smith</h1>

              <p className="customer-desigination">CEO Company</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
