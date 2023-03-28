import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe({ aboutMe, gotoMyExperience }) {
  return (
    <>
      <div className="aboutMe" ref={aboutMe}>
        <h2 className="sectionHeader">About me</h2>
        <div>
          <img
            className="avatar"
            src="https://img.freepik.com/premium-vector/cute-cat-face_536312-7.jpg"
            alt="this is me"
          />
          <span>
            <p>
              Irure ut Lorem commodo et id minim est qui sint do. Duis dolor do
              et labore est ex consequat. Consequat cillum consequat voluptate
              laboris cupidatat tempor aliqua dolore Lorem mollit velit minim
              ex. Proident qui aute aute officia cupidatat do. Sit non amet enim
              nulla ut occaecat nostrud. Tempor ad consequat ipsum ut.
            </p>
            <p>
              Proident do pariatur Lorem irure reprehenderit qui veniam ullamco
              esse elit proident. Exercitation sunt elit eiusmod commodo
              reprehenderit laboris consequat eiusmod cillum ea. Nostrud commodo
              consectetur anim ea aliqua. Ea deserunt Lorem ipsum ea veniam
              reprehenderit. Elit pariatur culpa fugiat ex labore consequat anim
              quis sint nostrud non.
            </p>
            <p>
              Proident qui aute aute officia cupidatat do. Sit non amet enim
              nulla ut occaecat nostrud. Tempor ad consequat ipsum ut. Proident
              do pariatur Lorem irure reprehenderit qui veniam ullamco esse elit
              proident. Exercitation sunt elit eiusmod commodo reprehenderit
              laboris consequat eiusmod cillum ea. Nostrud commodo consectetur
              anim ea aliqua.
            </p>
          </span>
        </div>
        <FontAwesomeIcon icon={faCircleArrowDown} className="goFurther" onClick={gotoMyExperience} />
      </div>
    </>
  );
}
