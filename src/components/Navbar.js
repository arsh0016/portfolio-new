import React, { useState, useEffect } from 'react';
import './Navbar.css';  // Import the CSS for Navbar
import { Link } from 'react-router-dom';
import closeMenuIcon from '../assets/images/icon-close-menu.svg';
import openMenuIcon from '../assets/images/icon-menu.svg';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);  
    };

    window.addEventListener('resize', checkMobile);

    checkMobile();

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);

   
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar ">
      <div className="container-fluid">
        <Link className="navbar-brand brand" to="/">My Portfolio</Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <img
            src={isNavOpen ? closeMenuIcon : openMenuIcon}  
            alt="Menu Toggle"
            className="menu-icon"
          />
        </button>
        <div className={`collapse navbar-collapse d-lg-flex justify-content-lg-end ${isNavOpen ? 'd-flex' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {isNavOpen && isMobile && (
        <div className="navbar-overlay">
          <button className="close-btn" onClick={toggleMenu}>
            <img src={closeMenuIcon} alt="Close Menu" className="close-icon" /> 
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
