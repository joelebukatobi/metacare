import React, { useState } from 'react';
// import onClickOutside from 'react-onclickoutside';

function Dropdown({ icon, title, items, chevron }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    // setActive(!active);
  };

  // NavbarItem.handleClickOutside = () => setOpen(false);

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
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
            <a href="#" className="item" key={item.id}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// const clickOutsideConfig = {
//   handleClickOutside: () => NavbarItem.handleClickOutside,
// };

// export default onClickOutside(NavbarItem, clickOutsideConfig);

export default Dropdown;
