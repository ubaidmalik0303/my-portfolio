import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import BrickWind from "../assets/img/brickwind.png";
import Eleviate from "../assets/img/eleviate.png";
import Vueexe from "../assets/img/vueexe.png";
import WallToWallCarpets from "../assets/img/walltowallcarpets.png";
import Muffshel from "../assets/img/muffshel.png";
import Painting from "../assets/img/painting.png";
import Solix from "../assets/img/solix.png";
import BloodBank from "../assets/img/bloodbank.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const webDevelopment = [
    {
      title: "BrickWind eCommerce",
      description: "MERN Stack",
      imgUrl: BrickWind,
      url: "https://www.brickwind.com/",
    },
    {
      title: "Eleviate LLC",
      description: "React & Firebase",
      imgUrl: Eleviate,
      url: "https://www.eleviatellc.com/",
    },
  ];

  const webDesign = [
    {
      title: "Wall To Wall Carpets",
      description: "Gatsby.js",
      imgUrl: WallToWallCarpets,
      url: "https://walltowallcarpets.netlify.app/",
    },
    {
      title: "Solix",
      description: "React.js",
      imgUrl: Solix,
      url: "",
    },
    {
      title: "Vueexe",
      description: "React.js",
      imgUrl: Vueexe,
      url: "https://www.vueexe.co/",
    },
    {
      title: "Muffshell.co",
      description: "Gatsby.js",
      imgUrl: Muffshel,
      url: "https://www.muffshell.co/",
    },
    {
      title: "Painting Services Dubai",
      description: "HTML, CSS & Bootstrap",
      imgUrl: Painting,
      url: "https://paintingserviceindubai.web.app/",
    },
  ];

  const mobileApp = [
    {
      title: "Blood Bank",
      description: "React Native & Firebase",
      imgUrl: BloodBank,
      url: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Website Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile App</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webDevelopment.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {webDesign.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {mobileApp.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
