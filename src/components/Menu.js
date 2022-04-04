import React from 'react';
import Sprite from 'assets/images/sprite.svg';

export default function Menu() {
  return (
    <div className="dashboard__container__menu">
      <div className="dashboard__container__menu__top">
        <div className="dashboard__container__menu__top__input">
          <input type="text" className="input" placeholder="Ask us any question" />
          <button className="btn">
            <svg className="" viewBox="0 0 21 21">
              <use href={`${Sprite}#icon-search`}></use>
            </svg>
          </button>
        </div>
        <div className="dashboard__container__menu__top__notification">
          <div className="dashboard__container__menu__top__notification__left">
            <svg className="" viewBox="0 0 18 18">
              <use href={`${Sprite}#icon-notification`}></use>
            </svg>
            <button className="btn">3</button>
          </div>
          <hr />
          <div className="dashboard__container__menu__top__notification__right">
            <div className="dashboard__container__menu__top__notification__right__user"></div>{' '}
            <svg className="" viewBox="0 0 18 18">
              <use href={`${Sprite}#icon-chevron-down`}></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="dashboard__container__menu__bottom">
        <ul className="dashboard__container__menu__bottom__list">
          <li className="active">
            <a href="/#">Efficiency </a>
          </li>
          <li>
            <a href="/#">Volume</a>
          </li>
          <li>
            <a href="/#">Customer Satisfaction</a>
          </li>
          <li>
            <a href="/#">Backlog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
