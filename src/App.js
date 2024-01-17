import React from 'react';
import Header from "./Header.js"
import Nav from"./Nav.js"
import Footer from"./Footer.js"
import Main from"./Main.js"
import TableReserve from './pages/TableReserve.js';
import ResponsiveNav from './pages/ResponsiveNav.js';

import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <main>
      <div className='header-bar'>
        <Header/>
        <Nav/>
        
      </div>
      <Routes>
        <Route path='/' element={<Main location="Chicago"/>}/>
        <Route path='/reservations' element={<TableReserve/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
