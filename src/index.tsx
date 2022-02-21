import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './assets/style/theme';

const GlobalStyle = createGlobalStyle`
    html,
    body {
      position: relative;
      height: 100%;
      margin:0;
    }
  `;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
