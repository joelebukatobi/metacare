import React from 'react';
import { Line } from 'react-chartjs-2';
import Dropdown from 'components/Dropdown';
import Sprite from 'assets/images/sprite.svg';

export default function Graph({ options, data, heading, style, label }) {
  return (
    <div className="dashboard__container__body__row__graph">
      <div className="dashboard__container__body__row__graph__left">
        <div className="dashboard__container__body__row__graph__left__top">
          <div className="dashboard__container__body__row__graph__left__top__left">
            <p>{heading}</p> <span>+4.14%</span>
          </div>
          <div className="dashboard__container__body__row__graph__left__top__right">
            <div className="dashboard__container__body__row__graph__left__top__right__left">
              <div className="box" style={style}></div>
              <p>High Priority</p>
            </div>
            <hr />
            <div className="select">
              <Dropdown
                title="This Month"
                items={['Option 1', 'Option 2', 'Option 3']}
                chevron={`${Sprite}#icon-schedule`}
              />
            </div>
          </div>
        </div>
        <Line options={options} data={data} />
      </div>
      <div className="dashboard__container__body__row__graph__right">
        <div className="dashboard__container__body__row__graph__right__card">
          <p>{label}</p>
          <h3>30 Mins</h3>
        </div>
        <div className="dashboard__container__body__row__graph__right__card">
          <p>Response Time</p>
          <h3>1 Hour 30 Mins</h3>
        </div>
      </div>
    </div>
  );
}
