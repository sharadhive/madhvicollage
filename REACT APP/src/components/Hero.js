import React from 'react';
import './Hero.css'; // Import the external CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Overlay to make the text more visible */}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Shetkari Unnati Mandal</h1>
        <h2>Smt. Chandrabai Anant Patil English Medium High School, Kalher</h2>
        <p>
          Shetkari Unnati Mandal Smt. Chandrabai Anant Patil English Medium High School was founded in July 2018. Since then, it has made significant contributions in the field of education.
        </p>
        <p>
          We are based in Kalher, one of the most cosmopolitan and chosen locations, well connected to Thane and Bhiwandi.
        </p>
      </div>
    </div>
  );
};

export default Hero;
