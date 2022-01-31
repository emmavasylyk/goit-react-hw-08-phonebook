import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.Nav}>
    <NavLink to="/" className={s.Link}>
      Home
    </NavLink>

    <NavLink to="/contacts" className={s.Link}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
