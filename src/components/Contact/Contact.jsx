import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts/operations';

export const Contact = ({ openElement, item }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contact_item}>
      <div className={s.contact_container}>
        <p className={s.contact_text}>
          <FaUser />
          <span className={s.contact_span}>{item.name}</span>
        </p>
        <p className={s.contact_text}>
          <FaPhoneAlt />
          <span className={s.contact_span}>{item.number}</span>
        </p>
      </div>
      <div className={s.btnWrapper}>
        <button
          className={s.button}
          onClick={() => dispatch(deleteContactsThunk(item.id))}
        >
          Delete
        </button>
        <button
          type="button"
          className={s.button}
          onClick={() => openElement(item)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
