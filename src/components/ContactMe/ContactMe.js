import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ContactMe({ contactMe }) {
  return (
    <>
      <div className="contactMe" ref={contactMe}>
        <h2 className="sectionHeader">Contact me</h2>
        <div className="contact">
          <Link to="https://github.com/mae-rwen" target="_blank">
          <div className="contactOption cardStyle">
            <GoMarkGithub className="contactIcon" />
            <h5>GitHub</h5>           
          </div>
          </Link>
          <Link to="mailto:agata.thrams@gmail.com">
          <div className="contactOption cardStyle">
            <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
            <h5>Email</h5>
            <p>agata.thrams@gmail.com</p>
          </div>
          </Link>
          <Link to="https://www.linkedin.com/in/agata-thrams/" target="_blank">
          <div className="contactOption cardStyle">
            <AiFillLinkedin className="contactIcon" />
            <h5>Linkedin</h5>            
          </div>
          </Link>
          <Link to="https://www.xing.com/profile/Agata_RomanczykThrams/" target="_blank">
          <div className="contactOption cardStyle">
            <FaXingSquare className="contactIcon" />
            <h5>Xing</h5>            
          </div>
          </Link>
        </div>
        {/* <FontAwesomeIcon icon={faCircleArrowDown} className="goFurther" onClick={gotoContactMe}/> */}
      </div>
    </>
  );
}
