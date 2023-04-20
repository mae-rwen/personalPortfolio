import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function MyProjects({ myProjects, gotoContactMe }) {
  const projects = [
    {
      title: "GitHub Profile",
      thumbnail:
        "https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg",
      description: `All of my bigger and smaller projects, that may not have been deployed yet`,
      hyperlink: `https://github.com/mae-rwen`,
    },
    {
      title: "Vibely",
      thumbnail:
        "https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg",
      description: `Fullstack application for connecting people with same interests, alowing them to create events and invite other people to join, like playing board games together or joining a concert in town.`,
      stack: ["React JS", "Boostrap", "Node.js", "Express.js", "MongoDB"],
      hyperlink: `https://vibely.onrender.com/`,
    },
    {
      title: "Poké Fight",
      thumbnail:
        "https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg",
      description: `Small fullstack application for browsing Pokémons and saving outputs of their fights.`,
      stack: ["React JS", "Node.js", "MongoDB"],
      hyperlink: `#`,
    },
    {
      title: "Tarot Portrait",
      thumbnail:
        "https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg",
      description: `Small frontend calculator-like application for creating personalised tarot psychological portraits`,
      stack: ["React JS", "Bootstrap", "Vanilla JavaScript"],
      hyperlink: `http://tarot.maerwen.pl/`,
    },
  ];

  return (
    <>
      <div className="myProjects" ref={myProjects}>
        <h2 className="sectionHeader">My Projects</h2>

        <Carousel className="projectsCarousel">
          {projects.map((project) => {
            return (             
              <Carousel.Item >
                <img                                
                  src={project.thumbnail}
                  alt="project thumbnail"
                />
                 
                <Carousel.Caption className="carouselCaption">
                <Link to={project.hyperlink} target="_blank"><h4>{project.title}</h4> </Link>
                  <p>{project.description}</p>
                  {project.stack ? (
                    <ul>                     
                      {project.stack.map((value) => {
                        return <li>{value}</li>;
                      })}
                    </ul>
                  ) : null}
                </Carousel.Caption>
               
              </Carousel.Item>
            );
          })}
        </Carousel>       
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className="goFurther"
          onClick={gotoContactMe}
        />
      </div>
    </>
  );
}
