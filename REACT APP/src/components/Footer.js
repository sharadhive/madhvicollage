import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="logo-container">
            <img src="/logo.png" alt="College Logo" className="footer-logo" />
            <img src="/logo2.png" alt="Secondary Logo" className="footer-logo-secondary" />
          </div>
          <p>
            Smt. Pushpalata Madhukar Madhavi College of Commerce Shetkari Unnati Mandal Smt. Pushpalata Madhukar Madhavi College of Commerce, Science and Arts was founded in July 2018. Since then, it has made significant contributions in the field of education.
          </p>
        </div>

        <div className="footer-middle">
          <h4>Main Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us/trust-info">About Us</Link></li>
            <li><Link to="/ba">BA</Link></li>
            <li><Link to="/bcom">B.Com</Link></li>
            <li><Link to="/bsc">B.Sc</Link></li>
            <li><Link to="/faculties">Faculties</Link></li>
            <li><Link to="/event">Event</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact Info</h4>
          <p>
            <strong>Address:</strong><br />
            At. Post. Kalher, Opp. Kopar Bus Stop, Tal. Bhiwandi, Dist.Thane 421302
          </p>
          <p><strong>Phone:</strong> <a href="tel:+918291990501">+91 82919 90501</a> / <a href="tel:+918291990058">82919 90058</a></p>
          <p><strong>Email:</strong> <a href="mailto:spmmcollege1083@gmail.com">spmmcollege1083@gmail.com</a></p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
