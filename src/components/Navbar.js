import React from 'react';
import NavbarCard from 'components/NavbarCard';
import Dropdown from 'components/Dropdown';
import Sprite from 'assets/images/sprite.svg';

export default function Navbar() {
  return (
    <div className="dashboard__navbar">
      <NavbarCard />
      <Dropdown icon={`${Sprite}#icon-msg`} title="admin" items={[]} chevron={`${Sprite}#icon-chevron-right`} />
      <Dropdown
        icon={`${Sprite}#icon-projects`}
        title="Knowledge Base"
        items={[]}
        chevron={`${Sprite}#icon-chevron-right`}
      />
      <Dropdown
        icon={`${Sprite}#icon-projects`}
        title="Train SAM"
        items={[]}
        chevron={`${Sprite}#icon-chevron-right`}
      />
      <Dropdown
        icon={`${Sprite}#icon-schedule`}
        title="Agent Inbox"
        items={[]}
        chevron={`${Sprite}#icon-chevron-right`}
      />
      <Dropdown
        icon={`${Sprite}#icon-activity`}
        title="Help Center"
        items={[]}
        chevron={`${Sprite}#icon-chevron-right`}
      />
      <Dropdown
        icon={`${Sprite}#icon-settings`}
        title="analytics"
        items={['Teams', 'Knowledge Based', 'Training SAM', 'Help Center']}
        chevron={`${Sprite}#icon-chevron-right`}
      />
    </div>
  );
}
