import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveNav.css'; // Create a separate CSS file for styling

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
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-item">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="nav-item">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-item">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-item">
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavDropdown;
