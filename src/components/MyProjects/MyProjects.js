import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyProjects({ myProjects, gotoContactMe }) {
  return (
    <>
      <div className="myProjects" ref={myProjects}>
        <h2 className="sectionHeader">My Projects</h2>
        <div className="projects">
          <div className="thumbnail">
            <img
              src="https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg"
              alt="project thumbnail"
            />
            <div className="thumbnailBody">
              <h4>Project 1</h4>
              <p>
                Do velit pariatur qui incididunt minim. Ut tempor non magna amet
                cillum. Elit anim cillum ex amet culpa ullamco. Velit elit id
                dolore nulla elit sint deserunt ex incididunt est minim
                occaecat. In dolor id sint veniam cillum sunt duis pariatur.
                Nulla occaecat fugiat excepteur tempor pariatur mollit velit
                consectetur cupidatat.
              </p>
              <ul>
                <li>JS</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="thumbnail">
            <img
              src="https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg"
              alt="project thumbnail"
            />
            <div className="thumbnailBody">
              <h4>Project 2</h4>
              <p>
                Do velit pariatur qui incididunt minim. Ut tempor non magna amet
                cillum. Elit anim cillum ex amet culpa ullamco. Velit elit id
                dolore nulla elit sint deserunt ex incididunt est minim
                occaecat. In dolor id sint veniam cillum sunt duis pariatur.
                Nulla occaecat fugiat excepteur tempor pariatur mollit velit
                consectetur cupidatat.
              </p>
              <ul>
                <li>JS</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="thumbnail">
            <img
              src="https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg"
              alt="project thumbnail"
            />
            <div className="thumbnailBody">
              <h4>Project 3</h4>
              <p>
                Do velit pariatur qui incididunt minim. Ut tempor non magna amet
                cillum. Elit anim cillum ex amet culpa ullamco. Velit elit id
                dolore nulla elit sint deserunt ex incididunt est minim
                occaecat. In dolor id sint veniam cillum sunt duis pariatur.
                Nulla occaecat fugiat excepteur tempor pariatur mollit velit
                consectetur cupidatat.
              </p>
              <ul>
                <li>JS</li>
                <li>React</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="thumbnail">
            <img
              src="https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg"
              alt="project thumbnail"
            />
            <div className="thumbnailBody">
              <h4>Project 4</h4>
              <p>
                Do velit pariatur qui incididunt minim. Ut tempor non magna amet
                cillum. Elit anim cillum ex amet culpa ullamco. Velit elit id
                dolore nulla elit sint deserunt ex incididunt est minim
                occaecat. In dolor id sint veniam cillum sunt duis pariatur.
                Nulla occaecat fugiat excepteur tempor pariatur mollit velit
                consectetur cupidatat.
              </p>
              <ul>
                <li>JS</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="thumbnail">
            <img
              src="https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg"
              alt="project thumbnail"
            />
            <div className="thumbnailBody">
              <h4>Project 3</h4>
              <p>
                Do velit pariatur qui incididunt minim. Ut tempor non magna amet
                cillum. Elit anim cillum ex amet culpa ullamco. Velit elit id
                dolore nulla elit sint deserunt ex incididunt est minim
                occaecat. In dolor id sint veniam cillum sunt duis pariatur.
                Nulla occaecat fugiat excepteur tempor pariatur mollit velit
                consectetur cupidatat.
              </p>
              <ul>
                <li>JS</li>
                <li>React</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="thumbnail">
            <img
              src="https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg"
              alt="project thumbnail"
            />
            <div className="thumbnailBody">
              <h4>Project 5</h4>
              <p>
                Do velit pariatur qui incididunt minim. Ut tempor non magna amet
                cillum. Elit anim cillum ex amet culpa ullamco. Velit elit id
                dolore nulla elit sint deserunt ex incididunt est minim
                occaecat. In dolor id sint veniam cillum sunt duis pariatur.
                Nulla occaecat fugiat excepteur tempor pariatur mollit velit
                consectetur cupidatat.
              </p>
              <ul>
                <li>JS</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className="goFurther"
          onClick={gotoContactMe}
        />
      </div>
    </>
  );
}
