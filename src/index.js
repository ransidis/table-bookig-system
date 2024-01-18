import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from "./images/Logo.png";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'Little Lemon';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
