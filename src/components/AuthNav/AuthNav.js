import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={s.Link}>
        Регистрация
      </NavLink>
      <NavLink to="/login" className={s.Link}>
        Логин
      </NavLink>
    </div>
  );
}
