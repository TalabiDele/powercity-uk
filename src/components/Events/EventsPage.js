import { useState, React } from "react";
import { Container } from "./Style";
import image from "../img/Believers-conference2.jpeg";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [isImage, setIsImage] = useState(false);

  const handleImage = () => {
    setIsImage(true);
  };

  return (
    <Container isImage={isImage}>
      <div className="modal" onClick={() => setIsImage(false)}>
        <img src={image} alt="" />
      </div>
      <div className="container">
        <div className="header">
          <h1>Events</h1>
          <div className="span"></div>
        </div>
        <div className="events">
          <h1>Upcoming Events</h1>
          <div className="card_container">
            <div className="card">
              <img src={image} alt="" onClick={handleImage} />
              <h2>4 Days Believers' Conference</h2>
              <a href="https://conta.ccc/3sBB2ey">
                <button>Register Here</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventsPage;
