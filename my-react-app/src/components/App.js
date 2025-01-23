import React from 'react';
import LeftColumn from './LeftColumn';
import MainArea from './MainArea';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <LeftColumn />
        <MainArea />
      </div>
    </div>
  );
}

export default App;