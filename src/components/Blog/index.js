import React from "react";
import "./index.css";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";
import customer3 from "../../assets/customer3.png";
import Reveal from "../utils/Reveal";

const Blog = () => {
  return (
    <div id="blog" className="blog-container">
      <div>
        <Reveal>
          <h1 className="our-product-heading">Latest Blog Posts</h1>
          <p className="our-product-para">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas.
          </p>
        </Reveal>
      </div>
      <div className="blog-sub-container">
        <div className="blog-box">
          <Reveal>
            <img className="blog-image" src={blog1} />
          </Reveal>
          <Reveal>
            <h1 className="blog-heading ">
              Organize your digital assets with a new methodology here.
            </h1>
          </Reveal>
          <Reveal>
            <p className="blog-para">
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
          </Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="customer-details">
              <Reveal>
                <img className="customer-image" src={customer1} />
              </Reveal>
              <div>
                <Reveal>
                  <h1 className="customer-name ">Andrew Miller</h1>
                  <p className="customer-desigination">CEO</p>
                </Reveal>
              </div>
            </div>
            <Reveal>
              <p>25 Apr</p>
            </Reveal>
          </div>
        </div>
        <div className="blog-box">
          <Reveal>
            <img className="blog-image" src={blog2} />
          </Reveal>
          <Reveal>
            <h1 className="blog-heading ">
              Organize your digital assets with a new methodology here.
            </h1>
          </Reveal>
          <Reveal>
            <p className="blog-para">
              Keeping your eye while performing a deep dive on the start-up
              mentality to derive convergence collaboratively.
            </p>
          </Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="customer-details">
              <Reveal>
                <img className="customer-image" src={customer2} />
              </Reveal>
              <div>
                <Reveal>
                  <h1 className="customer-name ">David Munsan</h1>
                  <p className="customer-desigination">UX</p>
                </Reveal>
              </div>
            </div>
            <Reveal>
              <p>25 Apr</p>
            </Reveal>
          </div>
        </div>
        <div className="blog-box blog-last">
          <Reveal>
            <img className="blog-image" src={blog3} />
          </Reveal>
          <Reveal>
            <h1 className="blog-heading ">
              Organize your digital assets with a new methodology here.
            </h1>
          </Reveal>
          <Reveal>
            <p className="blog-para">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C .
            </p>
          </Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="customer-details">
              <Reveal>
                <img className="customer-image" src={customer3} />
              </Reveal>
              <div>
                <Reveal>
                  <h1 className="customer-name ">Andrew Meller</h1>
                  <p className="customer-desigination">UI</p>
                </Reveal>
              </div>
            </div>
            <Reveal>
              <p>25 Apr</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
