import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Style";
import logo from "../img/powercity-logo.jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <Link to="/">
          <div className="image">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="about">
          <ul>
            <Link to="/about">
              <li>About us</li>
            </Link>
            <Link to="/about">
              <li>Contact us</li>
            </Link>
            <Link to="/events">
              <li>Events</li>
            </Link>
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
