import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          MBAI
        </NavLink>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-links" onClick={toggleMenu}>
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-links" onClick={toggleMenu}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;