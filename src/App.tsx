import React, { useCallback, useState } from 'react';
import { Sidebar, Customers } from './components';
import { Customer } from './types/Customer';

import './App.scss';
import { CustomerModal } from './components/CustomerModal/CustomerModal';

export const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const closeModal = useCallback(() => (
    setSelectedCustomer(null)
  ), []);

  return (
    <div className="App">
      <Sidebar />

      <div className="App__main">
        <h1 className="App__greeting">Hello Evano 👋🏼</h1>
        <Customers selectCustomer={setSelectedCustomer} />
      </div>

      {selectedCustomer && <CustomerModal customer={selectedCustomer} onCloseModal={closeModal} />}
    </div>
  );
};
