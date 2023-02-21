import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <h3>Services</h3>
        <ul>
          <li className='footer5'>Marketing</li>
          <li className='footer5'>Adversing</li>
          <li className='footer5'>coding training</li>
        </ul></div>
        <div className="footer-links">
        <h3>Blog</h3>
        <ul>
          <li className='footer5'>Music</li>
          <li className='footer5'>cinema</li>
          <li className='footer5'>Sport </li>
        </ul>
        </div>
        <div className="footer-links">
        <h3>Pages</h3>
        <ul>
          <li className='footer5'>Login</li>
          <li className='footer5'>Signup</li>
          <li className='footer5'><Link to =''style={{color: 'inherit', textDecoration: 'inherit'}}>Home</Link></li>
        </ul>
      </div>

      <div className="footer-icons">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;