import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme/theme.jsx'
import { ColorModeScript } from '@chakra-ui/react'
import { ApolloProvider } from "@apollo/client";
import TESTE from './queries';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={TESTE}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
