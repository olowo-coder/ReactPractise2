import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from "./components/LandingPage";


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <LandingPage/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
