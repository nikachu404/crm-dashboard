import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar/>
    </div>
  );
};
