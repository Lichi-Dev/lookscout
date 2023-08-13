import React from "react";
import "./index.css";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";
import Reveal from "../utils/Reveal";

const Brand = () => {
  return (
    <div className="brand-container">
      <div>
        <Reveal>
          <h1 className="our-product-heading">Proud to Be Used By</h1>
          <p className="our-product-para">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </Reveal>
      </div>
      <div className="brand-logo-container">
        <Reveal>
          <img className="brand-logo" src={brand1} />
        </Reveal>
        <Reveal>
          <img className="brand-logo" src={brand2} />
        </Reveal>
        <Reveal>
          <img className="brand-logo" src={brand3} />
        </Reveal>
        <Reveal>
          <img className="brand-logo" src={brand4} />
        </Reveal>
        <Reveal>
          <img className="brand-logo" src={brand5} />
        </Reveal>
        <Reveal>
          <img className="brand-logo" src={brand6} />
        </Reveal>
      </div>
    </div>
  );
};

export default Brand;
