import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Movie App"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ameygodse007/Movie-App-Flutter-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Widehavon (E-commerce)"
              description="An e-commerce site like amazon where user can buy goods, give review about it and do transaction using Paypal api. It's build using MERN stack. The admin user can ad and edit products on the site. and normal users can buy it."
              ghLink="https://github.com/ameygodse007/mern-Widehavon"
              demoLink="https://widehavon.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fluttershare"
              description="Its a small social media app where user can send messages to there loved ones and having other functionalities. I used Flutter framework for for frontend and firebase for backend."
              ghLink="https://github.com/ameygodse007/Fluttershare"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Text Editor"
              description="Simple text editor built using HTML, CSS and JAVASCRIPT."
              ghLink="https://github.com/ameygodse007/TextEditor.github.io"
              demoLink="https://ameygodse007.github.io/TextEditor.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Netflix"
              description="Netflix UI clone using React JS and movie API."
              ghLink="https://github.com/ameygodse007/netflix-clone"
              demoLink="https://netflix-clone-ec0f5.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MovieMania"
              description="Search for any movie belonging to any genre and get insights about it."
              ghLink="https://github.com/ameygodse007/MoviesMania"
              demoLink="https://moviesmania-4d51e.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
