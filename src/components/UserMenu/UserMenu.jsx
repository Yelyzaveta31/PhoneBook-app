import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/slice.js';
import { logoutThunk } from '../../redux/auth/operations';
import s from './UseMenu.module.css';

const UserMenu = () => {
  const username = useSelector(selectUserName);
  const dispatch = useDispatch();
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
