import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li><Link className="dropdown-item" to="/about-us/trust-info">Trust Info</Link></li>
                <li><Link className="dropdown-item" to="/about-us/chairman">Chairman</Link></li>
                <li><Link className="dropdown-item" to="/about-us/principal">Principal</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="academicsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Academics
              </a>
              <ul className="dropdown-menu" aria-labelledby="academicsDropdown">
                <li><Link className="dropdown-item" to="/ba">Pre-Primary (Nursery / Jr.Kg. / Sr.Kg.)
                </Link></li>
                <li><Link className="dropdown-item" to="/bcom">Primary (I to V)</Link></li>
                <li><Link className="dropdown-item" to="/bsc">Upper Primary (VI to VIII)</Link></li>
                <li><Link className="dropdown-item" to="/secondary">Secondary (IX & X)</Link></li>
                <li><Link className="dropdown-item" to="/junior-college">Junior College (XI & XII)</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/faculties">Faculties</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/event">Event</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center navbar-right">
          <Link className="btn nav-link admission-btn me-2" to="/contact">
            Admission Enquiry
          </Link>
          <Link className="navbar-brand" to="#">
            <img src="/logo2.png" alt="Logo" className="navbar-logo-right" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;