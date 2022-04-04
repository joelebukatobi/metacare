import React from 'react';
import Sprite from 'assets/images/sprite.svg';

export default function NavbarCard({ toggle }) {
  return (
    <div className="dashboard__navbar__row">
      <div className="dashboard__navbar__row__card">
        <h4>Metacare</h4>
        <h5>adeyinka@metcare.app</h5>
      </div>
      <svg onClick={toggle} className="dashboard__navbar__row__close" viewBox="0 0 24 24">
        <use href={`${Sprite}#icon-close`}></use>
      </svg>
    </div>
  );
}
