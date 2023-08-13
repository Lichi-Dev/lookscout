import React from "react";
import "./index.css";
import logoblack from "../../assets/logoblack.png";
import customer from "../../assets/customer.png";

const Customer = () => {
  return (
    <div className="customer-container">
      <div className="customer-top-container">
        <h1 className="our-product-heading">What Our Customers Say</h1>
        <p className="our-product-para">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </p>
      </div>
      <div className="customer-bottom-container">
        <img className="customer-logo" src={logoblack} />
        <h1 className="customer-heading">
          Thank you for making it painless, pleasant and most of all hassle
          free! I love LookScout. I can't say enough about LookScout. Great job,
          I will definitely be ordering again!
        </h1>
        <div className="customer-details">
          <img className="customer-image" src={customer} />
          <div>
            <h1 className="customer-name ">Lisa Smith</h1>
            <p className="customer-desigination">CEO Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
