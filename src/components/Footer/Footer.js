import React from "react";
import { Container } from "./Style";
import logo from "../img/powercity-logo.jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <div className="about">
          <ul>
            <li>About us</li>
            <li>Contact uu</li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
