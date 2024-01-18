import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveNav.css';
import { Link as ScrollLink } from 'react-scroll';

const MobileNavDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mobile-nav">
      <button className="toggle-button" onClick={toggleDropdown}>
        ☰
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-list">
          <li><Link to="/" className='nav-item'>Home</Link></li>
          <li> <ScrollLink to="about-us" smooth={true} duration={500} className='nav-item'>About</ScrollLink></li>
          <li><ScrollLink to="highlights" smooth={true} duration={500} className='nav-item'>Menu</ScrollLink></li>
          <li><Link to="/reservations" className='nav-item'>Reservations</Link></li>
          <li> <Link to="/order-online" className='nav-item'>Order Online</Link></li>
          <li><Link to="/login" className='nav-item'>Login</Link></li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavDropdown;
