import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { CgArrowDownO } from "react-icons/cg/";
import bgImage from "../../assets/images/galaxy.jpg";
import React, { useState, useEffect } from "react";
import kawka from '../../assets/images/kawka_logo.png';

export default function Header({ gotoAboutMe, setArrowClicked }) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <header style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="tagline">Welcome to my Portfolio</div>
        <div className="headerMain">
          <div className="headerText">            
              <h1>Hi! I'm Agata<br /> -{text}</h1>          
            <p>
            Passionate entry-level developer on the rise. Always learning, constantly creating, and committed to delivering exceptional user experiences. Let's bring the digital vision to life with a fresh perspective and a hunger for innovation.
            </p>
          </div>
          <div className="headerSide"><img src={kawka} alt="logo" /></div>
        </div>
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className="iconNext"
          onClick={() => {
            gotoAboutMe();
            setArrowClicked(true);
          }}
        />      
      </header>
    </>
  );
}
