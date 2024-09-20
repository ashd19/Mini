import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">TechKit Market</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Marketplace</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="cart">
        <a href="/cart">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;