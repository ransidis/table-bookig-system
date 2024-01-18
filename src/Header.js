import React from 'react';
import Logo from "./images/Logo.png";
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to='/'><header><img src={Logo} alt="Logo"/></header></Link>
      </>
    );
}

export default Header;
