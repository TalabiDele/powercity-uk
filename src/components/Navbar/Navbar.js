import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Style";
import logo from "../img/powercity-logo.jpg";

const Navbar = () => {
  return (
    <Container>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
