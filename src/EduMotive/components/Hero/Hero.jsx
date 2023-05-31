import React from "react";
import hb1 from "../../assets/images/hero-banner-1.jpg";
import hb2 from "../../assets/images/hero-banner-2.jpg";

import hs1 from "../../assets/images/hero-shape-1.svg";

import hs2 from "../../assets/images/hero-shape-2.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroContainer">
        {/* Hero Left */}
        <div className="heroLeft">
          <h1 className="heroTitle">
            The Best Program to <span>Enroll</span> for Exchange
          </h1>
          <h2 className="heroSubTitle">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit.
          </h2>
          <button className="btn">Find Courses</button>
        </div>
        {/* Hero Right */}
        <div className="heroRight">
          <img src={hb1} className="hb1" alt="" />
          <img src={hb2} className="hb2" alt="" />
          <img src={hs1} className="hs1" alt="" />
          <img src={hs2} className="hs2" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
