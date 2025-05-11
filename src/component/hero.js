import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-header">
        <img src='/logo.jpg' className="hero-logo" alt="CIK Logo" />
        <nav className="hero-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/news">News</Link>
          <Link to="/members">Members</Link>
          <Link to="/join">Join Us</Link>
        </nav>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to</h1>
          <h1 className="hero-subtitle">Club Ibn Khaldoun</h1>
          <div className="hero-divider"></div>
        </div>
        
        <p className="hero-description">
          Le Club Ibn Khaldoun est un espace dynamique et engagé au sein de la Faculté des Sciences Ben M'Sick de l'Université Hassan II.
          Notre mission est de promouvoir les valeurs de partage, de culture et de solidarité à travers diverses activités sociales et culturelles.
          Nous encourageons les étudiants à s'impliquer activement, à échanger leurs idées et à participer à des projets enrichissants qui renforcent la communauté universitaire.
          Que vous soyez passionné par la culture, l'engagement social ou simplement en quête d'expériences formatrices, le Club Ibn Khaldoun est là pour vous accueillir.
        </p>
      </div>
    </div>
  );
};

export default Hero;