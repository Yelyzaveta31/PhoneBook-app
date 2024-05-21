import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName, selectLogoutStatus } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UseMenu.module.css";

const UserMenu = () => {
  const username = useSelector(selectUserName);
  const logoutStatus = useSelector(selectLogoutStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (logoutStatus === "succeeded") {
      navigate("/login");
    }
  }, [logoutStatus, navigate]);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Welcome, {username}</h2>
      <button onClick={() => dispatch(logoutThunk())} className={s.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
