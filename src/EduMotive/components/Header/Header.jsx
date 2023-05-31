import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/images/logo-no-bg.png";
import "./Header.css";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  //console.log(isSearchOpen);

  const handleClick = () => {
    onClose();
  };

  const handleClickBar = () => {
    setIsSearchOpen(false);
    onOpen();
  };

  return (
    <>
      <header id="#home">
        <div className="logoContainer">
          <img src={logo} alt="" />
          <span>
            Edu<span>Motive</span>
          </span>
        </div>

        <div className="navlist">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="ibContainer">
          <div className="search">
            <i
              className={
                !isSearchOpen
                  ? `fa-solid fa-magnifying-glass`
                  : `fa-sharp fa-regular fa-circle-xmark`
              }
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            ></i>
            <input
              className={`searchInput ${isSearchOpen ? "activ" : null}`}
              type="text"
              placeholder="search here ..."
            />
          </div>

          <div className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cartQty">0</span>
          </div>

          <div className="navbtn btn">
            <span>Try for Free</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>

          <i onClick={handleClickBar} className="fa-solid fa-bars"></i>
        </div>
        <Drawer
          className="headerDrawer"
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          size={"md"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader padding={"10"}>
              <div className="logoContainer">
                <img src={logo} alt="" />
                <span>
                  Edu<span>Motive</span>
                </span>
              </div>
              <i
                onClick={onClose}
                className="fa-sharp fa-regular fa-circle-xmark"
              ></i>
            </DrawerHeader>

            <DrawerBody padding={"10"}>
              <div className="navlistDrawer">
                <a href="#home" onClick={handleClick}>
                  Home
                </a>
                <a href="#about" onClick={handleClick}>
                  About
                </a>
                <a href="#courses" onClick={handleClick}>
                  Courses
                </a>
                <a href="#blog" onClick={handleClick}>
                  Blog
                </a>
                <a href="#contact" onClick={handleClick}>
                  Contact
                </a>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
