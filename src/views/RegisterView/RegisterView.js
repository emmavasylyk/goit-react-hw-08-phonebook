import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/auth';
import { ImEnter } from 'react-icons/im';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    register({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.Title}>Register</h1>

      <form onSubmit={handleSubmit} className={s.Form} autoComplete="off">
        <label className={s.Label}>
          Name
          <input
            className={s.Input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={s.Label}>
          E-mail
          <input
            className={s.Input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.Label}>
          Password
          <input
            className={s.Input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={s.Button} type="submit">
          <ImEnter className={s.ButtonIcon} />
          Register
        </button>
      </form>
      <p className={s.Text}>
        Already have an account?{' '}
        <Link to="/login" className={s.TextLink}>
          Login
        </Link>
      </p>
    </div>
  );
}
