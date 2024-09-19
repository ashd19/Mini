import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyWebsite</h1>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUserCircle size={30} />
        <ul className={dropdownOpen ? 'profile-dropdown active' : 'profile-dropdown'}>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
