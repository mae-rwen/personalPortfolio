import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";

export default function ContactMe({ contactMe }) {
  const contactOptions = [
    {
      icon: <GoMarkGithub className="contactIcon" />,
      title: "GitHub",
      hyperlink: "https://github.com/mae-rwen",
    },
    {
      icon:  <HiMail className="contactIcon" />,
      title: "Email",
      description: "agata.thrams@gmail.com",
      hyperlink: "mailto:agata.thrams@gmail.com",
    },
    {
      icon: <AiFillLinkedin className="contactIcon" />,
      title: "Linkedin",
      hyperlink: "https://www.linkedin.com/in/agata-thrams/",
    },
    {
      icon: <FaXingSquare className="contactIcon" />,
      title: "Xing",
      hyperlink: "https://www.xing.com/profile/Agata_RomanczykThrams/",
    },
  ];

  return (
    <>
      <div className="contactMe" ref={contactMe}>
        <h2 className="sectionHeader">Contact me</h2>
        <div className="contact">
          {contactOptions.map((option) => {
            return (
              <Link to={option.hyperlink} target="_blank">
                <div className="contactOption cardStyle">
                  {option.icon}
                  <h5>{option.title}</h5>
                  {option.description ? (<p>{option.description}</p>) : null}
                </div>
              </Link>
            );
          })}          
        </div>        
      </div>
    </>
  );
}
