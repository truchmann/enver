import React from 'react';
import './Footer.scss';
import logo from '../assets/logo.png';

const Footer = ({ onContactClick }) => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__logo">
        <img src={logo} alt="Enver Logo" className="footer__logo-img" />
      </div>
      <div className="footer__links">
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
      </div>
      <button className="footer__contact-btn" onClick={onContactClick}>Contact us</button>
      <div className="footer__copyright">© 2020 Enver, All Rights Reserved</div>
    </div>
  </footer>
);

export default Footer; 