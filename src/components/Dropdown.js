import React, { useState } from 'react';

function Dropdown({ icon, title, items, chevron }) {
  const [open, setOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const toggle = () => {
    setOpen(!open);
    setActive(!isActive);
  };

  return (
    <div className="dropdown">
      <div
        className={isActive ? 'active' : ''}
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open, isActive)}
      >
        <a href="/#" className="group">
          <div className="left">
            <svg className="icon" viewBox="0 0 16 16">
              <use href={icon}></use>
            </svg>
            <p>{title}</p>
          </div>
          <div className="right">
            <svg className="icon" viewBox="0 0 16 16">
              <use href={chevron}></use>
            </svg>
          </div>
        </a>
      </div>
      {open && (
        <div className="list">
          {items.map((item) => (
            <a href="/#" className="item" key={item.id}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
