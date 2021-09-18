import React from "react";
import "./App.css";
import "./Navbar.css";

function Navbar() {

    return (
      <header className="navbar flex justify-between md:justify-center font-body font-medium" id="header">
        <a href="#about" className="msm:hidden md:mr-6 self-center font-bold link">About</a>
        <a href="#tech" className="msm:hidden self-center font-bold link">Technologies</a>
        <a href="#home" className="md:mx-7 logo">
          <img src="https://res.cloudinary.com/nobill/image/upload/v1624378077/portfolio2021/logo.svg" className="logo" alt="logo" />
        </a>
        <a href="#projects" className="msm:hidden md:mr-6 self-center font-bold link">Projects</a>
        <a href="#contact" className="msm:hidden self-center font-bold link">Contact</a>
        <button className="ssm:hidden">
          <img src="https://res.cloudinary.com/nobill/image/upload/v1624385965/portfolio2021/hamburger.svg" className="ham" alt="logo" />           
        </button>
      </header>
    );
}

export default Navbar;
