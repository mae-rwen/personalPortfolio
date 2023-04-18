import Footer from "./Footer";
import Navigation from "./Navigation";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import MyExperience from "../MyExperience/MyExperience";
import MyProjects from "../MyProjects/MyProjects";
import ContactMe from "../ContactMe/ContactMe";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Portfolio() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const home = useRef(null);
  const aboutMe = useRef(null);
  const myExperience = useRef(null);
  const myProjects = useRef(null);
  const contactMe = useRef(null);

  const gotoHome = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };
  const gotoAboutMe = () => {
    aboutMe.current?.scrollIntoView({ behavior: "smooth" });
  };
  const gotoMyExperience = () => {
    myExperience.current?.scrollIntoView({ behavior: "smooth" });
  };
  const gotoMyProjects = () => {
    myProjects.current?.scrollIntoView({ behavior: "smooth" });
  };
  const gotoContactMe = () => {
    contactMe.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {scrolledDown ? (
        <Navigation
          gotoHome={gotoHome}
          gotoAboutMe={gotoAboutMe}
          gotoMyExperience={gotoMyExperience}
          gotoMyProjects={gotoMyProjects}
          gotoContactMe={gotoContactMe}
        />
      ) : null}
      <ScrollToTop
        smooth
        className="toTop"
        component={<FontAwesomeIcon icon={faCircleArrowUp} />}
      />
      <div className="main">
        <Header home={home} gotoAboutMe={gotoAboutMe} />
        <AboutMe aboutMe={aboutMe} gotoMyExperience={gotoMyExperience} />
        <MyExperience
          myExperience={myExperience}
          gotoMyProjects={gotoMyProjects}
        />
        <MyProjects myProjects={myProjects} gotoContactMe={gotoContactMe} />
        <ContactMe contactMe={contactMe} />
      </div>
      <Footer />
    </>
  );
}
