import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from "./components/LandingPage";
import Custom from "./components/Custom";


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <LandingPage/> */}
    {/* <Custom/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
