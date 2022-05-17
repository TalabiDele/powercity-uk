import React from "react";
import { Container } from "./Style";
import heroImage from "../img/Abel-Damina.png";

const Hero = () => {
  return (
    <Container>
      <div className="container">
        <div className="content">
          <div className="img">
            <img src={heroImage} alt="" />
          </div>
          <div className="hero-header">
            <p>Dr. Abel & Rachel Damina</p>
            <h1>Welcome to our Ministry</h1>
            <button>Join us Live</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
