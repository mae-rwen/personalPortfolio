import { NavLink } from "react-router-dom";

export default function Navigation({
  gotoHome,
  gotoAboutMe,
  gotoMyExperience,
  gotoMyProjects,
  gotoContactMe,
}) {
  return (
    <>
      <div className="navigation">
        <NavLink
          to="/"
          onClick={() => {
            gotoHome();
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          onClick={() => {
            gotoAboutMe();
          }}
        >
          About me
        </NavLink>
        <NavLink
          to="/"
          onClick={() => {
            gotoMyExperience();
          }}
        >
          Skills
        </NavLink>
        <NavLink
          to="/"
          onClick={() => {
            gotoMyProjects();
          }}
        >
          Projects
        </NavLink>
        <NavLink
          to="/"
          onClick={() => {
            gotoContactMe();
          }}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
}
