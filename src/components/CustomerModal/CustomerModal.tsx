import React from 'react';
import { Customer } from '../../types/Customer';

import './CustomerModal.scss';

type Props = {
  customer: Customer;
  onCloseModal: () => void;
}

export const CustomerModal: React.FC<Props> = ({ customer, onCloseModal }) => {
  const { name, company, phone, email, country, status } = customer;

  return (
    <div className="customer-modal">
      <div className="customer-modal__content">
        <div className="customer-modal__close-button" onClick={onCloseModal}>Close</div>
        <p>Name: {name}</p>
        <p>Company: {company}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Country: {country}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};
