import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <h1 className="display-6 animated-gradient-text">Hi, I'm Arshpreet Kaur</h1>
        <p className="lead fade-in-text">Explore my expertise in <span className="highlight">Web Development</span>, <span className="highlight">Graphic Design</span>, and <span className="highlight">UX</span>.</p>
        <p className="fade-in-text">Scroll to discover my journey and projects, or click below to dive right in!</p>
        <Link to="/projects" className="btn view pulse-glow-button">Explore My Portfolio</Link> {/* Use Link instead of <a> */}
      </div>
    </div>
  );
};

export default HeroSection;
