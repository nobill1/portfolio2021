import React from "react";
import "./App.css";
import "./Navbar.css"
import logo from "./logo.svg";
import hamburger from "./hamburger.svg";
import close from "./Close.svg";

function Navbar() {
    return (
      <header className="navbar flex justify-between md:justify-center font-body font-medium" id="header">
        <a href="#about" className="msm:hidden md:mr-6 self-center font-bold link">About</a>
        <a href="#tech" className="msm:hidden self-center font-bold link">Technologies</a>
        <a href="#home" className="md:mx-7 logo">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <a href="#projects" className="msm:hidden md:mr-6 self-center font-bold link">Projects</a>
        <a href="#contact" className="msm:hidden self-center font-bold link">Contact</a>
        <button className="ssm:hidden">
          <img src={hamburger} className="ham" alt="logo" />           
        </button>
      </header>
    );
}

export default Navbar;
