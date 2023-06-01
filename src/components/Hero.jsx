import React from "react";
import "../styles/hero.css";
import { NavLink } from "react-router-dom";

const Hero = ({headingText, btnText, btnLink, imgSrc }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center hero-row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-3">
              {headingText}
              <span className="highlight-text"> Shahzaib Technical</span>
            </h1>
            <p>We are the team of telented developers making websites</p>
            <button className="btn outline-btn" style={{width
            :"10rem"}}><NavLink className="btn-link" to={btnLink}
            >{btnText}</NavLink></button>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
          <img src={imgSrc} alt="" className="vert-move"/>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
