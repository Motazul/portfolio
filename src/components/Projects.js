import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import images from "../assets/img/projects/index"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      description: "Calculadora",
      imgUrl: images.calculator[1],
      link: "https://beamish-axolotl-fbf339.netlify.app/"
    },
    {
      description: "Spotify Clone",
      imgUrl: images.spotifyClone[1],
      link: "https://idyllic-marzipan-75f639.netlify.app/"
    },

    {
      description: "VideoGame",
      imgUrl: images.videogame[1],
      link: "https://frolicking-fairy-b0f498.netlify.app"
    },

    {
      description: "Mokepon",
      imgUrl: images.mokepon[1],
      link: "https://clever-horse-7b0842.netlify.app/"
    },
    
    {
      description: "TrailersPage",
      imgUrl: images.trailers[1],
      link: "https://sparkly-dodol-b41329.netlify.app"
    },



    // {
    //   description: "Design & Development",
    //   imgUrl: projImg4,
    // },
    // {
    //   description: "Design & Development",
    //   imgUrl: projImg5,
    // },
    // {
    //   description: "Design & Development",
    //   imgUrl: projImg6,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I show you to all the big and small websites I have done so far</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
