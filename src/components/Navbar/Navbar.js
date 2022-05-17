import React from "react";
import { Container } from "./Style";
import logo from "../img/powercity-logo.jpg";

const Navbar = () => {
  return (
    <Container>
      <div className="container">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Events</li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
