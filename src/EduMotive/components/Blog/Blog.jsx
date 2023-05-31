import React from "react";
import { blogData } from "../../data";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <section className="blog sectionContainer" id="blog">
        <h2 className="sectionSubtitle">LATEST ARTICLES</h2>
        <h1 className="sectionTitle">Get News With Eduweb</h1>

        <div className="blogContainer">
          {blogData.map((blog, i) => (
            <div className="blogBox" key={i}>
              <div className="blogImg">
                <img src={blog.image} alt="" />
              </div>
              <div className="blogContent">
                <div className="arrow">
                  <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
                <p className="blogStatus">{blog.mode}</p>
                <h2 className="blogTitle">{blog.title}</h2>
                <div className="blogInfo">
                  <span>
                    <i className="fa-sharp fa-solid fa-calendar-days"></i>
                    {blog.date}
                  </span>
                  <span>
                    <i className="fa-sharp fa-solid fa-comments"></i>Comm{" "}
                    {blog.comm}
                  </span>
                </div>
                <div className="blogDesc">{blog.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
