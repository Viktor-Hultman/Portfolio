import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
// import './index.css';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  display: none;
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

