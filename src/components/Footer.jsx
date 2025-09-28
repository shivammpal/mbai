import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <NavLink to="/privacy" className="footer-link">Privacy & Policy</NavLink>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" className="social-icon-link"><FaInstagram /></a>
          <a href="https://www.facebook.com" target="_blank" className="social-icon-link"><FaFacebookF /></a>
          <a href="https://www.youtube.com" target="_blank" className="social-icon-link"><FaYoutube /></a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} MBAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;