import React from "react";
import ReactPlayer from "react-player";
import { Container } from "./Style";

const VideoComponent = () => {
  return (
    <Container>
      <div className="container">
        <ReactPlayer url="https://www.youtube.com/watch?v=LsVct4o_FLc" />
        <div className="wrapper">
          <h1>Welcome to Powercity Intl' Enfield</h1>
          <p>
            PowerCity International Enfield Town, North London Campus is a place
            where Jesus Christ and His Word is being taught. Here it is all
            about Jesus.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default VideoComponent;
