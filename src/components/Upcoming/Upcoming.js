import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Style";
import image from "../img/Believers-conference1.jpeg";

const Upcoming = () => {
  return (
    <Container>
      <div className="container">
        <h1>Upcoming Events</h1>
        <div className="wrapper">
          <div className="card">
            <img src={image} alt="" />
            <h2>4 Days Believers' Conference</h2>
            <Link to="/events">
              <button>See more</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Upcoming;
