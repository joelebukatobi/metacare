import React from 'react';
import Sprite from 'assets/images/sprite.svg';
import Dropdown from 'components/Dropdown';

export default function Header() {
  return (
    <div className="dashboard__container__header">
      <h3>Efficiency Analytics</h3>
      <div className="dashboard__container__header__right">
        <div className="dashboard__container__header__right__search">
          <button className="btn">
            <svg className="" viewBox="0 0 21 21">
              <use href={`${Sprite}#icon-search`}></use>
            </svg>
          </button>
          <input type="text" className="input" placeholder="Search" />
        </div>

        <div className="select">
          <Dropdown
            title="Filter Options"
            items={['Option 1', 'Option 2', 'Option 3']}
            chevron={`${Sprite}#icon-chevron-down`}
          />
        </div>
        <hr />
        <div className="dashboard__container__header__right__button">
          <button className="btn">Export</button>
        </div>
      </div>
    </div>
  );
}
