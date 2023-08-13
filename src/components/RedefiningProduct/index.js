import React from "react";
import "./index.css";
import rp1 from "../../assets/rp1.png";
import rp2 from "../../assets/rp2.png";
import rp3 from "../../assets/rp3.png";
import rplg from "../../assets/rplg.png";
import rpmd from "../../assets/rpmd.png";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "../utils/Reveal";

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

const RedefiningProduct = () => {
  return (
    <div className="redefining-product-container">
      <div>
        <Reveal>
          <h1 className="our-product-heading">Redefining Product Features</h1>
          <p className="our-product-para">
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </p>
        </Reveal>
      </div>
      <div className="redefining-product-sub-container">
        <div className="redefining-product-description-container">
          {array.map((item) => (
            <div className="redefining-product-description-sub-container">
              <div>
                <Reveal>
                  <img src={item.img} className="our-product-image" />
                </Reveal>
              </div>
              <div style={{ marginTop: "-15px", marginLeft: "10px" }}>
                <Reveal>
                  <h1 className="our-product-sub-heading">{item.heading}</h1>
                </Reveal>
                <Reveal>
                  <p className="our-product-sub-para">{item.para}</p>
                </Reveal>
                <Reveal>
                  <div className="our-product-link-container">
                    <a className="our-product-link">Learn More</a>
                    <FiArrowRight className="our-product-link" />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
        <img src={rplg} className="redefining-product-image-lg" />
        <img src={rpmd} className="redefining-product-image-md" />
      </div>
    </div>
  );
};

export default RedefiningProduct;
