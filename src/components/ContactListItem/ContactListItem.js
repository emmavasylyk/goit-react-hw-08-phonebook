import {
  useDeleteContactMutation,
  useEditContactMutation,
} from '../../redux/contacts';
import { ImBin } from 'react-icons/im';
import s from './ContactListItem.module.css';
import { useState } from 'react';

export const ContactListItem = ({ id, name, phone }) => {
  console.log('name', name);
  const [change, setChange] = useState(false);
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phone);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [editContact, { isLoading: isEditing }] = useEditContactMutation();

  const editHandler = () => {
    editContact({
      changedContact: { name: contactName, number: contactPhone },
      id,
    });
    setChange(false);
  };
  return (
    <li className={s.Item}>
      <p className={s.ContactList}></p>
      {name}: {phone}{' '}
      <button type="button" className={s.Button} onClick={() => editHandler()}>
        Edit
      </button>
      <button
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
        className={s.Button}
      >
        <ImBin className={s.ButtonIcon} />
        Delete
      </button>
    </li>
  );
};
