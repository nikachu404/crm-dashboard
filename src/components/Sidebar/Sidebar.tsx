import React, { useState } from 'react';
import cn from 'classnames';

import logo from '../../assets/logo.svg';
import version from '../../assets/version.svg';
import user from '../../assets/user.svg';
import rightArrow from '../../assets/right-arrow.svg';
import rightArrowWhite from '../../assets/right-arrow-white.svg';
import dasboardIcon from '../../assets/dashboard.svg';
import productIcon from '../../assets/product.svg';
import customersIcon from '../../assets/customers.svg';
import incomeIcon from '../../assets/income.svg';
import promoteIcon from '../../assets/promote.svg';
import helpIcon from '../../assets/help.svg';
import burgerIcon from '../../assets/burger.svg';

import './Sidebar.scss';

const navigationItems = [
  { title: 'Dashboard', icon: dasboardIcon },
  { title: 'Product', icon: productIcon },
  { title: 'Customers', icon: customersIcon, selected: true },
  { title: 'Income', icon: incomeIcon },
  { title: 'Promote', icon: promoteIcon },
  { title: 'Help', icon: helpIcon },
];

export const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__burger-menu" onClick={toggleMenu}>
          <img src={burgerIcon} alt="burger menu" className="sidebar__burger-icon" onClick={toggleMenu} />
        </div>

        <div>
          <div className="sidebar__logo">
            <img src={logo} alt="logo" className="sidebar__logo-icon" />
            <img src={version} alt="version" className="sidebar__version-icon" />
          </div>
          <div className="sidebar__navigation">
            <ul className={cn(
              'sidebar__nav-list',
              { 'sidebar__open-menu': isMenuOpen }
            )}>
              {navigationItems.map((item, index) => (
                <li
                  className={cn(
                    'sidebar__nav-item',
                    { 'sidebar__nav-item--selected': item.selected }
                  )}
                  key={index}
                >
                  <div className="sidebar__nav-item--title">
                    <img src={item.icon} alt={`${item.title} icon`} className="sidebar__icon" />
                    {item.title}
                  </div>
                  <img src={item.selected ? rightArrowWhite : rightArrow} alt="right arrow" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sidebar__user">
          <img src={user} alt="user image" />
          <div className="sidebar__user-info">
            <p className="sidebar__user-name">Evano</p>
            <p className="sidebar__user-position">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};
