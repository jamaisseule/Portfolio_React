import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>Hi, It's Ngan Truong,</h1>
      <p>I am frontend developer based in Vietnam.</p>
      <div className="hero-action">
        <a href="#about" className="hero-about">
          <div>About Me</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
