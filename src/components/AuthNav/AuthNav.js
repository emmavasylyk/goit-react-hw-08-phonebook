import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={s.Link}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.Link}>
        Login
      </NavLink>
    </div>
  );
}
