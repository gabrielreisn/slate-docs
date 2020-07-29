import React from 'react';
import './App.css';
import RichText from './Components/RichText'

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=latin-ext"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <RichText />
    </div>
  );
}

export default App;
