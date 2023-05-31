import React from "react";
import { catData } from "../../data";
import "./Categories.css";

// #AFC49D
// #f16462
// #4e61e4
// #fac637

const Categories = () => {
  return (
    <section className="sectionContainer categories">
      <h2 className="sectionSubtitle">Categories</h2>
      <h1 className="sectionTitle">Online Classes For Remote Learning</h1>
      <p className="catIntro">
        Consectetur adipiscing elit sed do eiusmod tempor.
      </p>
      <div className="catContainer">
        {catData.map((cat, i) => (
          <div className="catBox" key={i}>
            <div className="catImage">
              <img src={cat.icon} alt="" />
            </div>
            <h2 className="catTitle">{cat.title}</h2>
            <p className="catDesc">{cat.desc}</p>
            <p className="courses">{cat.courses} Courses</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
