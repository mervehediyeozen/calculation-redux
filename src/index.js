import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './redux/store';
import {ChakraProvider} from '@chakra-ui/react'
import theme from './Theme';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Provider store={store}>
      <Router>
    <App />
    </Router>
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

