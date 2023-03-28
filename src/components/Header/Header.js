import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import { CgArrowDownO } from "react-icons/cg/";

export default function Header({gotoAboutMe, setArrowClicked}) {
  return (
    <>
      <header>
          <h1>Hello, I'm Agata R. Thrams</h1>
          <p>
            Ullamco sit anim enim id ut ipsum nisi dolore fugiat. Nulla cillum
            occaecat deserunt laboris in cupidatat. Ad aliqua amet sint duis
            veniam ullamco ipsum cillum anim cillum exercitation qui proident.
            Ipsum occaecat nisi nostrud deserunt id aute officia dolore magna
            exercitation esse ea reprehenderit. Ut ex proident velit ut deserunt
            veniam sint incididunt ea aute sunt magna ad. Dolore minim amet do
            cillum nostrud laboris veniam et magna proident veniam ea.
            Ullamco sit anim enim id ut ipsum nisi dolore fugiat. Nulla cillum
            occaecat deserunt laboris in cupidatat.
          </p>           
          <FontAwesomeIcon icon={faCircleArrowDown} className="iconNext" onClick={() => {gotoAboutMe(); setArrowClicked(true)}}/>          
      </header>
    </>
  );
}
