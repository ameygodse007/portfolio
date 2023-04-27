import React from "react";
import "./Experience.css";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Particle from "../Particle";
import Section from "../section/Section";
import ExperienceCard from "../experienceCard/ExperienceCard";
import experienceData from "../../data/experience.json";

const Experience = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <h1 className="project-heading">
        My <strong className="purple">Experience </strong>
      </h1>
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
        <Fade bottom duration={1200} distance="20px">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          ></div>
        </Fade>
      </div>
    </Container>
  );
};

export default Experience;
