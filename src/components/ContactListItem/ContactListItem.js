import {
  useDeleteContactMutation,
  useEditContactMutation,
} from '../../redux/contacts';
import { ImBin } from 'react-icons/im';
import { ImPencil } from 'react-icons/im';
import { ImSpinner3 } from 'react-icons/im';
import { ImCheckmark } from 'react-icons/im';
import s from './ContactListItem.module.css';
import { useState } from 'react';

export const ContactListItem = ({ id, name, number }) => {
  const [change, setChange] = useState(false);
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [editContact, { isLoading: isEditing }] = useEditContactMutation();

  const editHandler = () => {
    editContact({
      changeContact: { name: contactName, number: contactNumber },
      contactId: id,
    });
    setChange(false);
  };
  return (
    <>
      <li className={s.Item}>
        {!change ? (
          <>
            <span className={s.ContactList}>
              {name}: {number}{' '}
            </span>
            <button
              className={s.ButtonEdit}
              type="button"
              onClick={() => setChange(true)}
            >
              {isEditing ? (
                <ImSpinner3 className={s.ButtonIcon} />
              ) : (
                <ImPencil className={s.ButtonIcon} />
              )}
              Edit
            </button>
          </>
        ) : (
          <>
            <input
              className={s.Input}
              name="name"
              value={contactName}
              onChange={e => {
                console.log('event', e.target.value);
                return setContactName(e.target.value);
              }}
            />
            <input
              className={s.Input}
              type="tel"
              name="phone"
              value={contactNumber}
              autoFocus
              onChange={e => {
                console.log('event', e.target.value);
                return setContactNumber(e.target.value);
              }}
            />
            <button
              className={s.ButtonDone}
              type="button"
              onClick={() => editHandler()}
            >
              <ImCheckmark className={s.ButtonIcon} />
              Done
            </button>
          </>
        )}
        <button
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
          className={s.Button}
          type="button"
        >
          {isDeleting ? (
            <ImSpinner3 className={s.ButtonIcon} />
          ) : (
            <ImBin className={s.ButtonIcon} />
          )}
          Delete
        </button>
      </li>
    </>
  );
};
