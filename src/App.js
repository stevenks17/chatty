import React from 'react';
import './App.css';
import Sidebar from './Sidebar';


function App() {
  return (
    //BEM
    <div className="app">
      <h1> Chatty </h1>

      <Sidebar />
    </div>
  );
}

export default App;
