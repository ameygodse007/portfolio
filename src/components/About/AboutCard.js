import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amey Godse </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am a junior pursuing Engineering in IT branch in PICT Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgba(18, 250, 107, 0.65)" }}>
            "Look in the Mirror... That's your Competition "{" "}
          </p>
          <footer className="white">-Amey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
