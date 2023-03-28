import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";

export default function ContactMe({ contactMe }) {
  return (
    <>
      <div className="contactMe" ref={contactMe}>
        <h2 className="sectionHeader">Contact me</h2>
        <div className="contact">
          <div className="contactOption">
            <GoMarkGithub className="contactIcon" />
            <h5>GitHub</h5>
            <p>github.com/mae-rwen</p>
          </div>
          <div className="contactOption">
            <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
            <h5>Email</h5>
            <p>agata.thrams@gmail.com</p>
          </div>
          <div className="contactOption">
            <AiFillLinkedin className="contactIcon" />
            <h5>Linkedin</h5>
            <p>linkedin.com/in/agata-thrams/</p>
          </div>
          <div className="contactOption">
            <FaXingSquare className="contactIcon" />
            <h5>Xing</h5>
            <p>
              xing.com/profile/
              <br />
              Agata_RomanczykThrams
            </p>
          </div>
        </div>
        {/* <FontAwesomeIcon icon={faCircleArrowDown} className="goFurther" onClick={gotoContactMe}/> */}
      </div>
    </>
  );
}
