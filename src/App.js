import React from 'react';
import Header from "./Header.js"
import Nav from"./Nav.js"
import Footer from"./Footer.js"
import Main from"./Main.js"
import './App.css';
import './sizes/mobile.css'
import './sizes/tablet.css'

function App() {
  return (
    <main>
      <div className='header-bar'>
        <Header/>
        <Nav/>
      </div>
      <Main/>
      <Footer/>
    </main>
  );
}

export default App;
