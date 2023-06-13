import s from './ContactList.module.css';
import { useSelector , useDispatch} from 'react-redux';
import { getContacts } from 'redux/contactsSelector';
import {  deleteContact, fetchContacts } from 'redux/contactsThunk';
import { useEffect } from 'react';


export const ContactList = ({ title }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.contactList}>
        {contacts && contacts.length > 0 ? (
          contacts.map(contact => (
            <li key={contact.id} className={s.contactItem}>
              <p>
                <span>{contact.name}:</span>
                <span>{contact.number}</span>
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
                className={s.BtnDelete}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className={s.no_contacts}>There are no contacts here</p>
        )}
      </ul>
    </>
  );
};
