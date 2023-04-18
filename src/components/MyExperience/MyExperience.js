import {
  faCircleArrowDown,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyExperience({ myExperience, gotoMyProjects }) {
  return (
    <>
      <div className="myExperience" ref={myExperience}>
        <h2 className="sectionHeader">My experience</h2>
        <div className="stack">
          <div className="cardStyle">
            <h4>Frontend</h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> JavaScript
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> HTML
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> CSS
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> SCSS
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Bootstrap
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> React JS
              </li>
            </ul>
          </div>
          <div className="cardStyle">
            <h4>Backend</h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Node JS
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Express JS
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Mongo DB
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> PostgreSQL
              </li>
            </ul>
          </div>
          <div className="cardStyle">
            <h4>Methodologies</h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Git
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Scrum
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Responsive webdesign
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Kanban
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> UI/UX Design
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} /> Project management
              </li>
            </ul>
          </div>
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
