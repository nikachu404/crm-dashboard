import React, { useState } from 'react';
import cn from 'classnames';

import { ICONS_BASE_URL } from '../../constants';

import './Sidebar.scss';

interface navigationItem {
  title: string;
  icon: string;
  selected?: boolean;
}

const navigationItems: navigationItem[] = [
  { title: 'Dashboard', icon: 'dashboard' },
  { title: 'Product', icon: 'product' },
  { title: 'Customers', icon: 'customers', selected: true },
  { title: 'Income', icon: 'income' },
  { title: 'Promote', icon: 'promote' },
  { title: 'Help', icon: 'help' },
];

interface SidebarItem {
  item: navigationItem;
}

const SidebarItem = ({ item }: SidebarItem) => (
  <li
    className={cn(
      'sidebar__nav-item',
      { 'sidebar__nav-item--selected': item.selected }
    )}
    key={item.title}
  >
    <div className="sidebar__nav-item--title">
      <img
        src={ICONS_BASE_URL + item.icon + '.svg'}
        alt={`${item.title} icon`}
        className="sidebar__icon"
      />
      {item.title}
    </div>
    <img
      src={
        item.selected
          ? ICONS_BASE_URL + 'right-arrow-white.svg'
          : ICONS_BASE_URL + 'right-arrow.svg'
      }
      alt="right arrow"
    />
  </li>
);

export const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__burger-menu" onClick={toggleMenu}>
          <img
            src={ICONS_BASE_URL + 'burger.svg'}
            alt="burger menu"
            className="sidebar__burger-icon"
          />
        </div>
        <div>
          <div className="sidebar__logo">
            <img
              src={ICONS_BASE_URL + 'logo.svg'}
              alt="logo"
              className="sidebar__logo-icon"
            />
            <img
              src={ICONS_BASE_URL + 'version.svg'}
              alt="version"
              className="sidebar__version-icon"
            />
          </div>

          <div className="sidebar__navigation">
            <ul
              className={cn('sidebar__nav-list', {
                'sidebar__open-menu': isMenuOpen,
              })}
            >
              {navigationItems.map((item) => (
                <SidebarItem key={item.title} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="sidebar__user">
          <img src={ICONS_BASE_URL + 'user.svg'} alt="user image" />
          <div className="sidebar__user-info">
            <p className="sidebar__user-name">Evano</p>
            <p className="sidebar__user-position">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};
