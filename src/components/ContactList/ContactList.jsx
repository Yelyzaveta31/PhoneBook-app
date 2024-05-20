import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { Contact } from "../Contact/Contact";

const ContactList = () => {
  const filteredItems = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={s.contact_list}>
        {filteredItems.map((item) => (
          <Contact item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
