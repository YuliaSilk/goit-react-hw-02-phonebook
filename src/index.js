import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    main: '#AD0467',
    backgraund: '#F6E5EF',
    acent: '#f80694',
  },

  radii: {
    md: '15px',
  },
  // box-shadow: 1px 1px 3px 2px #ad0467;
spacing: value => `${value * 4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={{theme}}>
    <App />
    <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
