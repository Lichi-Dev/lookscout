import React from "react";
import "./index.css";
import rp1 from "../../assets/rp1.png";
import rp2 from "../../assets/rp2.png";
import rp3 from "../../assets/rp3.png";
import rplg2 from "../../assets/rplg2.png";
import rpmd from "../../assets/rpmd.png";
import { FiArrowRight } from "react-icons/fi";
let array = [
  {
    img: rp1,
    heading: "Explore ideas together",
    para: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    img: rp2,
    heading: "Bring those ideas to life",
    para: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    img: rp3,
    heading: "Ship better outcomes",
    para: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
];

const RedefiningProductNew = () => {
  return (
    <div className="redefining-product-new-container">
      <div className="redefining-product-sub-container">
        <img src={rplg2} className="redefining-product-image-lg" />
        <img src={rpmd} className="redefining-product-image-md" />
        <div className="redefining-product-description-container margin-fix">
          {array.map((item) => (
            <div className="redefining-product-description-sub-container">
              <div>
                <img src={item.img} className="our-product-image" />
              </div>
              <div style={{ marginTop: "-15px", marginLeft: "10px" }}>
                <h1 className="our-product-sub-heading color-fix-header">
                  {item.heading}
                </h1>
                <p className="our-product-sub-para color-fix-para">
                  {item.para}
                </p>
                <div className="our-product-link-container">
                  <a className="our-product-link">Learn More</a>
                  <FiArrowRight className="our-product-link" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RedefiningProductNew;
