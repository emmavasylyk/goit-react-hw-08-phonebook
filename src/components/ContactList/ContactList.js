import { getFilter } from '../../redux/contacts';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useFetchContactsQuery } from '../../redux/contacts';
import s from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data } = useFetchContactsQuery();

  const getfilteredContacts = contacts =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  const contactFilterList = data ? getfilteredContacts(data) : null;

  return (
    <>
      {!contactFilterList || contactFilterList.length === 0 ? (
        <p className={s.Text}>Oops, there is no such contact in your phone!</p>
      ) : (
        <ul className={s.ContactList}>
          {contactFilterList.map(item => (
            <ContactListItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactList;
