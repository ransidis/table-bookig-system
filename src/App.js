import React from 'react';
import Header from "./Header.js"
import Nav from"./Nav.js"
import Footer from"./Footer.js"
import Main from"./Main.js"
import TableReserve from './pages/TableReserve.js';
import './Header.css';
import OrderOnline from './pages/OrderOnline.js'
import Login from './pages/Login.js'
import BackToTopButton from './BackToTopButton';

import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <main>
      <BackToTopButton/>
      <div className='header-bar'>
        <div id="header"><Header/></div>
        <div id="nav"><Nav/></div>
      </div>
      <Routes>
        <Route path='/' element={<Main location="Chicago"/>}/>
        <Route path='/reservations' element={<TableReserve/>}/>
        <Route path='/order-online' element={<OrderOnline/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
