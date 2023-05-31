import React from "react";
import play from "../../assets/images/play.png";
import vidBanner from "../../assets/images/video-banner.jpg";
import vs1 from "../../assets/images/video-shape-1.png";
import vs2 from "../../assets/images/video-shape-2.png";
import "./Video.css";

const Video = () => {
  return (
    <>
      <section className="video sectionContainer">
        <div className="videoWrapper">
          <img src={vs1} className="vidShape1" alt="" />
          <img src={vs2} className="vidShape2" alt="" />
          <img src={play} className="playBtn" alt="" />
          <img src={vidBanner} className="vidBanner" alt="" />
        </div>
      </section>
      <div className="statsWrapper">
        <div className="statBox">
          <h2 className="statNumber">25k+</h2>
          <p className="statInfo">Students Enrolled</p>
        </div>

        <div className="statBox">
          <h2 className="statNumber">1k+</h2>
          <p className="statInfo">ClassName Completed</p>
        </div>

        <div className="statBox">
          <h2 className="statNumber">100%</h2>
          <p className="statInfo">Satisfaction Rate</p>
        </div>

        <div className="statBox">
          <h2 className="statNumber">50+</h2>
          <p className="statInfo">Top Instructors</p>
        </div>
      </div>
    </>
  );
};

export default Video;
