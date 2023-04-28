import React from 'react';
import { Sidebar, Customers } from './components';

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
