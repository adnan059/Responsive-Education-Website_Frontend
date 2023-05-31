import React from "react";

import { courseData } from "../../data";
import "./Courses.css";

const Courses = () => {
  return (
    <>
      <section className="courses sectionContainer" id="courses">
        <h2 className="sectionSubtitle">POPULAR COURSES</h2>
        <h1 className="sectionTitle">Pick A Course To Get Started</h1>
        <div className="courseContainer">
          {courseData.map((course, i) => (
            <div className="courseBox" key={i}>
              <div className="courseImage">
                <img src={course.image} alt="" />
              </div>
              <div className="courseBoxContent">
                <p className="level">{course.level}</p>
                <h2 className="courseTitle">{course.title}</h2>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="price">{course.price}</p>
                <div className="info">
                  <span>{course.lessons} Lessons</span> |{" "}
                  <span>{course.students} Students</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn">Browse for More Courses</button>
      </section>
    </>
  );
};

export default Courses;
