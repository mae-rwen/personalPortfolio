import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import agata from "../../assets/images/AgataRThrams.jpg";

export default function AboutMe({ aboutMe, gotoMyExperience }) {
  return (
    <>
      <div className="aboutMe" ref={aboutMe}>
        <h2 className="sectionHeader">About me</h2>
        <div>
          <img className="avatar" src={agata} alt="this is me" />
          <span>
            <p>
              I'm a versatile and creative web developer with a flair for
              user-centric design. With a diverse background in customer
              service, content creation, and dance teaching, I bring a unique
              perspective to the world of web development. I'm an
              entry-level developer, yet my passion for coding and creating
              responsive and user-friendly applications is limitless.
            </p>
            <p>
              My specialty is in full-stack development, and I am proficient in
              React and Node.js. But, my love for technology goes beyond that,
              and I'm always eager to learn more. My expertise includes
              JavaScript, HTML, CSS, and SQL and NoSQL databases. However, I
              don't rest on my laurels and constantly seek new challenges to
              expand my knowledge.
            </p>
            <p>
              My focus is on creating engaging designs that are both visually
              appealing and user-friendly. I believe that user experience is the
              cornerstone of any successful application, and I take pride in
              delivering projects that are responsive and interactive. With an
              eye for detail, I ensure that every aspect of my work is carefully
              crafted to meet the needs of the end-user.
            </p>
            <p>
              I'm driven by my passion for web development and my desire to push
              the boundaries of what's possible. I'm always on the lookout for
              new and exciting opportunities to grow my skills and provide
              innovative solutions for my clients. So, if you're looking for a
              creative and versatile web developer who is dedicated to
              delivering high-quality results, look no further.
            </p>
          </span>
        </div>
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className="goFurther"
          onClick={gotoMyExperience}
        />
      </div>
    </>
  );
}
