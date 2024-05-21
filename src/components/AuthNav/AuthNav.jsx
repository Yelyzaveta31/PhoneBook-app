import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.auth}>
      {!isLoggedIn && (
        <>
          <NavLink className={activeClass} to="/register">
            Registration
          </NavLink>
          <NavLink className={activeClass} to="/login">
            Log in
          </NavLink>
        </>
      )}
    </div>
  );
};

export default AuthNav;
