import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from "./images/Logo.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
    <meta name="description" content="We are family owned, Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
    <meta name="og:title" content="Little Lemons Restaurent"/>
    <meta name="og:description" content="We are family owned, Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
    <meta name="og:image" content={Logo}/>
    </head>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
