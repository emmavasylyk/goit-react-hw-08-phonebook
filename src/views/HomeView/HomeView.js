import React from 'react';
import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.Container}>
    <h1 className={s.Title}>
      Welcome! <br />
      On the site, you can save your contacts in your personal account!{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
