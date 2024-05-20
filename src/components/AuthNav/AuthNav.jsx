import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav>
      <NavLink className={activeClass} to="/register">
        Register
      </NavLink>
      <NavLink className={activeClass} to="/login">
        Log in
      </NavLink>
    </nav>
  );
};

export default AuthNav;
