import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts';
import toastError from '../../helpers/toastWarn';
import s from './ContactForm.module.css';
import { ImUserPlus } from 'react-icons/im';
import { useState } from 'react';
import { onSuccess } from '../Error/ErrorMessages';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const hundleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const hundleSubmit = async e => {
    e.preventDefault();

    const contactContent = {
      name,
      number: number,
    };

    const isContactNameInArray = contacts.find(
      contact =>
        contact.name.toLowerCase() === contactContent.name.toLowerCase(),
    );

    const isContactNumberInArray = contacts.find(
      contact => contact.number === contactContent.number,
    );

    if (isContactNameInArray) {
      return toastError(name);
    }

    if (isContactNumberInArray) {
      return toastError(number);
    }

    createContact(contactContent);
    onSuccess('Your contact has been successfully added!');
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={hundleSubmit}>
      <label className={s.LableName}>
        Name
        <input
          className={s.InputForm}
          placeholder="Ivan Petrov"
          type="text"
          name="name"
          value={name}
          onChange={hundleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.LableName}>
        Number
        <input
          className={s.InputForm}
          placeholder="111-11-11"
          type="tel"
          name="phone"
          value={number}
          onChange={hundleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.ButtonContactForm} type="submit">
        <ImUserPlus className={s.ButtonContactFormIcon} />
        Add contact
      </button>
    </form>
  );
}
