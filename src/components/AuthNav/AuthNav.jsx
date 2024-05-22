import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.auth}>
      <NavLink className={activeClass} to="/register">
        Registration
      </NavLink>
      <NavLink className={activeClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
