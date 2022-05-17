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
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
