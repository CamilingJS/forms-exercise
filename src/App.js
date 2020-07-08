import React from 'react';
import Box from '../src/Components/Box';
import BoxList from '../src/Components/BoxList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box height={10} width={20} color='purple' />
      <Box height={20} width={15} color='gold' />
      <BoxList />
    </div>
  );
}

export default App;
