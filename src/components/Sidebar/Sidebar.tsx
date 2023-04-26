import React from 'react';

import logo from '../../assets/logo.svg';
import version from '../../assets/version.svg';
import user from '../../assets/user.svg';
import dasboard from '../../assets/dashboard.svg';
import product from '../../assets/product.svg';
import customers from '../../assets/customers.svg';
import income from '../../assets/income.svg';
import promote from '../../assets/promote.svg';
import help from '../../assets/promote.svg';
import rightArrow from '../../assets/right-arrow.svg';
import rightArrowWhite from '../../assets/right-arrow-white.svg';

import './Sidebar.scss';

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div>
          <div className="sidebar__logo">
            <img src={logo} alt="logo" />
            <img src={version} alt="version" />
          </div>

          <div className="sidebar__navigation">
            <ul className="sidebar__nav-list">
              <li className="sidebar__nav-item">
                <div className="sidebar__nav-item--title">
                  <img src={dasboard} alt="dashboard icon" className='sidebar__icon' />
                  Dashboard
                </div>
              </li>

              <li className="sidebar__nav-item">
                <div className="sidebar__nav-item--title">
                  <img src={product} alt="product icon" className='sidebar__icon' />
                  Product
                </div>
                <img src={rightArrow} alt="right arrow" />
              </li>

              <li className="sidebar__nav-item sidebar__nav-item--selected">
                <div className="sidebar__nav-item--title">
                  <img src={customers} alt="customers icon" className='sidebar__icon' />
                  Customers
                </div>
                <img src={rightArrowWhite} alt="right arrow" />
              </li>

              <li className="sidebar__nav-item">
                <div className="sidebar__nav-item--title">
                  <img src={income} alt="income icon" className='sidebar__icon' />
                  Income
                </div>
                <img src={rightArrow} alt="right arrow" />
              </li>

              <li className="sidebar__nav-item">
                <div className="sidebar__nav-item--title">
                  <img src={promote} alt="promote icone" className='sidebar__icon' />
                  Promote
                </div>
                <img src={rightArrow} alt="right arrow" />
              </li>

              <li className="sidebar__nav-item">
                <div className="sidebar__nav-item--title">
                  <img src={help} alt="help icon" className='sidebar__icon' />
                  Help
                </div>
                <img src={rightArrow} alt="right arrow" />
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar__user">
          <img src={user} alt="user image" />
        </div>
      </div>
    </div>
  );
};
