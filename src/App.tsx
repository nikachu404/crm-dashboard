import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Customers } from './components/Customers/Customers';

import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />

      <div className="App__main">
        <h1 className="App__greeting">Hello Evano 👋🏼,</h1>
        <Customers />
      </div>
    </div>
  );
};
