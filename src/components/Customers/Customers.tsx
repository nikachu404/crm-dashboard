import React, { useState } from 'react';
import cn from 'classnames';

import { ICONS_BASE_URL } from '../../constants';
import { Customer } from '../../types/Customer';
import customersData from '../../data/customers.json';

import './Customers.scss';

export const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customersData.filter((customer) => {
    return Object.values(customer).some((value) => {
      return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const renderCustomer = (customer: Customer) => {
    return (
      <tr key={customer.email}>
        <td className="customers__td">{customer.name}</td>
        <td className="customers__td">{customer.phone}</td>
        <td className="customers__td">{customer.email}</td>
        <td className="customers__td">{customer.country}</td>
        <td className="customers__td">
          <div
            className={cn('customers__status', {
              'customers__status--active': customer.status === 'active',
            })}
          >
            {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
          </div>
        </td>
      </tr>
    );
  };

  const renderPagination = () => {
    const pages = [1, 2, 3, 4, '...', 40];
    const selectedPage = 1;

    return (
      <ul className="customers__pag-list">
        <li className="customers__pag-item">&lt;</li>
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={cn('customers__pag-item', {
                'customers__pag-item--active': page === selectedPage,
              })}
            >
              {page}
            </li>
          );
        })}
        <li className="customers__pag-item">&gt;</li>
      </ul>
    );
  };

  return (
    <div className="customers">
      <div className="customers__header">
        <div>
          <p className="customers__title">All Customers</p>
          <p className="customers__subtitle">Active Members</p>
        </div>
        <span className="customers__search">
          <span className="customers__search-icon">
            <img src={ICONS_BASE_URL + 'search.svg'} alt="search" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="customers__search-input"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </span>
      </div>

      <table className="customers__table">
        <thead>
          <tr>
            <th className="customers__th customers__underline-start">Customer Name</th>
            <th className="customers__th">Phone Number</th>
            <th className="customers__th">Email</th>
            <th className="customers__th">Country</th>
            <th className="customers__th customers__underline-end">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => renderCustomer(customer))}
        </tbody>
      </table>

      <div className="customers__footer">
        <div className="customers__pag-info">
          Showing data 1 to 8 of 256K entries
        </div>
        <div className="customers__pagination">{renderPagination()}</div>
      </div>
    </div>
  );
};
