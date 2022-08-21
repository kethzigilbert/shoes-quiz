import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import DrawerLayout from './views/layout/drawer'
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none"
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000"
    },
    white: {
      main : "#ffffff",
   
    },
    secondary: {
      main: "#aeaeaf"
    },
    aqua: {
      main: "#3c6474",
      contrastText: "#ffffff"
    },
    text: {
      white: "white",
      light: "#aeaeaf"
    },
    background: {
      default: "#f7f7f7",
      darkgrey: "#333333",
      lightgrey: "#f7f7f7",
      white: "#ffffff"
    },

  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  },
  


});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DrawerLayout>
          <App />
        </DrawerLayout>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
