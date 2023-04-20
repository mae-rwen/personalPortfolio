import {
  faCircleArrowDown,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyExperience({ myExperience, gotoMyProjects }) {
  const experiences = [
    {
      title: "Frontend",
      options: ["JavaScript", "HTML", "CSS", "SCSS", "Bootstrap", "React JS"],
    },
    {
      title: "Backend",
      options: ["Node JS", "Express JS", "Mongo DB", "PostgreSQL"],
    },
    {
      title: "Methodologies",
      options: [
        "Git",
        "Scrum",
        "Responsive webdesign",
        "Kanban",
        "UI/UX Design",
        "Project management",
      ],
    },
  ];
  
  return (
    <>
      <div className="myExperience" ref={myExperience}>
        <h2 className="sectionHeader">My experience</h2>
        <div className="stack">
          {experiences.map((experience) => {
            return (
              <div className="cardStyle">
                <h4>{experience.title}</h4>
                <ul>
                  {experience.options.map((skill) => {
                    return (
                      <li>
                        {" "}
                        <FontAwesomeIcon icon={faCircleCheck} /> {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}          
        </div>
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className="goFurther"
          onClick={gotoMyProjects}
        />
      </div>
    </>
  );
}
