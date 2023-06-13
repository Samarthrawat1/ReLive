import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import hero_image_back from "../../assets/hero_image_back.png";
import hero_image from "../../assets/hero_image.png";
// import { motion } from "framer-motion";

const Hero = () => {
  // const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* Ai-Text */}
        <div className="ai">
          <div></div>
          <span>Artificially resurrecting our lost loved ones</span>
        </div>

        {/* Hero-Text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Breathing </span>
            <span>Life</span>
          </div>
          <div>
            <span>Into Memories</span>
          </div>
          <div>
            <span>
              ReLive can provide comfort and closure to those who have lost
              loved ones.
            </span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Our Team</button>
        </div>
      </div>
      <div className="right-h">
        {/* <button className="btn">Sign In</button> */}
        <div className="heart">
          <img src={Heart} alt="" />
          <span>Bring Back</span>
          <span>Memories</span>
        </div>
        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
      </div>
    </div>
  );
};

export default Hero;
