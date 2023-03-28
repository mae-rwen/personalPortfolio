import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyExperience({ myExperience, gotoMyProjects }) {
  return (
    <>
      <div className="myExperience" ref={myExperience}>
        <h2 className="sectionHeader">My experience</h2>
        <div className="stack">
          <div>
            <h4>Frontend</h4>
            <ul>
              <li>JS</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h4>Backend</h4>
            <ul>
              <li>JS</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h4>Methodologies</h4>
            <ul>
              <li>JS</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li>JS</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <FontAwesomeIcon icon={faCircleArrowDown} className="goFurther" onClick={gotoMyProjects}/>
      </div>
    </>
  );
}
