import React, { useState } from 'react';
import cn from 'classnames';

import customersData from '../../api/customers.json';
import { ICONS_BASE_URL } from '../../constants';

import './Customers.scss';

export const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customersData.filter(customer =>
    Object.values(customer).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="customers">
      <div className="customers__header">
        <div>
          <p className="customers__title">All Customers</p>
          <p className="customers__subtitle">Active Members</p>
        </div>
        <span className="customers__search">
          <span className="customers__search-icon">
            <img src={ICONS_BASE_URL + 'search.svg'} alt="seacrh"></img>
          </span>
          <input
            type="text"
            placeholder='Search'
            className="customers__search-input"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
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
          {filteredCustomers.map((customer) => {
            return (
              <tr key={customer.email}>
                <td className="customers__td">{customer.name}</td>
                <td className="customers__td">{customer.phone}</td>
                <td className="customers__td">{customer.email}</td>
                <td className="customers__td">{customer.country}</td>
                <td className="customers__td">
                  <div className={cn(
                    'customers__status',
                    { 'customers__status--active': customer.status === 'active' }
                  )}>
                    {customer.status.charAt(0).toLocaleUpperCase() + customer.status.slice(1)}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="customers__footer">
        <div className="customers__pag-info">
          Showing data 1 to 8 of {filteredCustomers.length} entries
        </div>
        <div className="customers__pagination">
          <ul className="customers__pag-list">
            <li className="customers__pag-item">&lt;</li>
            <li className="customers__pag-item customers__pag-item--active">1</li>
            <li className="customers__pag-item">2</li>
            <li className="customers__pag-item">3</li>
            <li className="customers__pag-item">4</li>
            <li className="customers__pag-dots">...</li>
            <li className="customers__pag-item">40</li>
            <li className="customers__pag-item">&gt;</li>
          </ul>
        </div>
      </div>
    </div >
  );
};
