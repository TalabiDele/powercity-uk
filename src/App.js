import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroPage/Hero";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import Worship from "./components/Worship/Worship";
import Upcoming from "./components/Upcoming/Upcoming";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoComponent />
      <Worship />
      <Upcoming />
      <Footer />
    </div>
  );
}

export default App;
