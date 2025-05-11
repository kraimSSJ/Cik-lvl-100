import React from 'react';
import './JoinUs.css';
import { Link } from 'react-router-dom';

function JoinUs() {
  return (
    <div className="join-us-page">
      <header>
        <img src='/logo.jpg' id="logog" alt="CIK Logo" />
        <ul className="nav-lista">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/join">Join Us</Link></li>
        </ul>
      </header>
      
      <div className="JoinUsContainer">
        <div className="leftSide">
          <h1>Reasons To Join:</h1>
          <p>
            Le Club Ibn Khaldoun est un espace de partage, de culture et de solidarité. 
            En rejoignant notre communauté, vous pourrez développer vos compétences, 
            élargir votre réseau et participer à des événements qui favorisent 
            l'inclusion et la diversité.
            <br /><br />
            Rejoignez-nous pour un avenir plus ouvert, un épanouissement personnel 
            et des opportunités sans fin !
          </p>
        </div>
        
        <div className="join-container">
          <h1 className="join-title">JOIN US</h1>
          <form className="join-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Departement" required />
            
            <select required>
              <option value="">Year of Study</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
            </select>
            
            <input type="text" placeholder="Why do you want to join?" />

            <label className="interest-label">Select your interest:</label>
            <div className="interests">
              <label><input type="radio" name="interest" /> Action Sociale</label>
              <label><input type="radio" name="interest" /> Action Culturelle</label>
              <label><input type="radio" name="interest" /> Both</label>
            </div>

            <label>Upload student card (optional)</label>
            <input type="file" />

            <label className="checkbox-label">
              <input type="checkbox" required />
              I agree to the club's values and code of conduct
            </label>

            <div className="captcha">🔒 CAPTCHA</div>

            <button type="submit" className="join-button"><Link to="/*">REJOINDRE L'AVENTURE</Link></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;