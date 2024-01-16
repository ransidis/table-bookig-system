import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from "./images/Logo.png";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <head>
    <meta name="description" content="We are family owned, Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
    <meta name="og:title" content="Little Lemons Restaurent"/>
    <meta name="og:description" content="We are family owned, Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
    <meta name="og:image" content={Logo}/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
