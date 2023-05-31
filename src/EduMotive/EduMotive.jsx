import React from "react";
import "./EduMotive.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Categories from "./components/Categories/Categories";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Video from "./components/Video/Video";

// #012C3D

const EduMotive = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <About />
      <Courses />
      <Video />
      <Blog />
      <Footer />
    </>
  );
};

export default EduMotive;
