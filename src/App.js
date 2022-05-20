import Home from "./Home";
import Events from "./Events";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          {/* <Home />
          </Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
