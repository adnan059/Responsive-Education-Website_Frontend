import React from "react";
import logo from "../../assets/images/logo-no-bg.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer sectionContainer" id="contact">
        <div className="footerContainer">
          <div className="footerBox1 footerBox">
            <div className="logo">
              <img src={logo} alt="" />
              Edu <span>Motive</span>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              hic! Lorem ipsum dolor sit.
            </p>
            <p>Address: 137/2 Parkin St, UK</p>
            <p>Phone: +563***452</p>
            <p>Email: example@ymail.com</p>
          </div>

          <div className="footerBox footerBox2">
            <h2>Online Platform</h2>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#courses">courses</a>
              </li>
              <li>
                <a href="#home">instructor</a>
              </li>
              <li>
                <a href="#home">Instructor Profile</a>
              </li>
              <li>
                <a href="#home">events</a>
              </li>
              <li>
                <a href="#home">Purchase Guide</a>
              </li>
            </ul>
          </div>

          <div className="footerBox footerBox3">
            <h2>Links</h2>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">News & Articles</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Registration</a>
              </li>
              <li>
                <a href="#">Coming Soon</a>
              </li>
            </ul>
          </div>

          <div className="footerBox footerBox4">
            <h2>Contact</h2>
            <p>
              Enter your email address to register to our newsletter
              subscription
            </p>
            <input type="email" placeholder="Your Email" />
            <button className="btn">Subscribe</button>

            <div className="iconsContainer">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <p className="credit">
          Designed By
          <a href="https://www.facebook.com/profile.php?id=100091858671661">
            Md. Adnan Faruk
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
