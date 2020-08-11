import React from 'react';
import './App.css';
import RichText from './Components/RichText'

import { ApolloProvider } from '@apollo/client';
import {client} from './client'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=latin-ext"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <RichText />
      </div>
    </ApolloProvider>
  );
}

export default App;
