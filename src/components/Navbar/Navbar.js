import React from "react";
import { Container, Wrapper } from "./Style";
import logo from "../img/powercity-logo.jpg";

const Navbar = () => {
  return (
    <Container>
      <div className="container">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
