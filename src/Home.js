import React from "react";
import Hero from "./components/HeroPage/Hero";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import Worship from "./components/Worship/Worship";
import Upcoming from "./components/Upcoming/Upcoming";

const Home = () => {
  return (
    <div>
      <Hero />
      <VideoComponent />
      <Worship />
      <Upcoming />
    </div>
  );
};

export default Home;
