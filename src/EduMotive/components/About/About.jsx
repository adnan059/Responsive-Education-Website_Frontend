import React from "react";
import ab from "../../assets/images/about-banner.jpg";
import as1 from "../../assets/images/about-shape-1.svg";
import as2 from "../../assets/images/about-shape-2.svg";
import as3 from "../../assets/images/about-shape-3.png";

import "./About.css";

const About = () => {
  return (
    <>
      <section className="about sectionContainer" id="about">
        <div className="aboutWrapper">
          <div className="leftAbout">
            <div className="aboutBannerImg">
              <img src={ab} alt="" className="abanner" />
            </div>
            <img src={as1} alt="" className="as1" />
            <img src={as2} alt="" className="as2" />
            <img src={as3} alt="" className="as3" />
          </div>
          <div className="rightAbout">
            <h2 className="sectionSubtitle">About Us</h2>
            <h1 className="sectionTitle">
              Over 10 Years in Distant learning for Skill Development
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
              ex tempor incididunt labore dolore magna aliquaenim ad minim.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-check-double"></i>Expert Trainers
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i>Lifetime Access
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i>Online Remote
                Learning
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
