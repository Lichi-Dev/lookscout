import React from "react";
import "./index.css";
import op1 from "../../assets/op1.png";
import op2 from "../../assets/op2.png";
import op3 from "../../assets/op3.png";
import op4 from "../../assets/op4.png";
import op5 from "../../assets/op5.png";
import op6 from "../../assets/op6.png";
import { FiArrowRight } from "react-icons/fi";

let array = [
  {
    img: op1,
    heading: "Easier Work Organization",
    para: "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.",
  },
  {
    img: op2,
    heading: "Fast Connection",
    para: "Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.",
  },
  {
    img: op3,
    heading: "Streamlined Processes",
    para: "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
  },
  {
    img: op4,
    heading: "Easier Integrations",
    para: "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.",
  },
  {
    img: op5,
    heading: "Marketing Analytics",
    para: "Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.",
  },
  {
    img: op6,
    heading: "Workflow Builder",
    para: "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.",
  },
];

const OurProduct = () => {
  return (
    <div className="our-product-container">
      <div>
        <h1 className="our-product-heading">Messaging for all</h1>
        <p className="our-product-para">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>
      <div className="our-product-description-container">
        {array.map((item) => (
          <div className="our-product-box">
            <img className="our-product-image" src={item.img} />
            <h1 className="our-product-sub-heading">{item.heading}</h1>
            <p className="our-product-sub-para">{item.para}</p>
            <div className="our-product-link-container">
              <a className="our-product-link">Learn More</a>
              <FiArrowRight className="our-product-link" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
