import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginUserMutation } from '../../redux/auth';
import { ImEnter } from 'react-icons/im';
import s from './LoginView.module.css';
// ImEnter;

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn] = useLoginUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    logIn({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.Title}>Login</h1>
      <form onSubmit={handleSubmit} className={s.Form} autoComplete="off">
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
          Login
        </button>
      </form>
      <p className={s.Text}>
        If you don`t have an account, please{' '}
        <Link to="/register" className={s.TextLink}>
          register
        </Link>
        !
      </p>
    </div>
  );
}
