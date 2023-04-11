import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About me</NavLink>
      <NavLink to="/">Skills</NavLink>
      <NavLink to="/">Projects</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
    </>
  )
}
