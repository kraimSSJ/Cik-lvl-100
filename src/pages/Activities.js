import React from "react";
import { Link } from 'react-router-dom';
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-page">
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
      
      <h1 className="section-title">Activités</h1>
      
      <div className="activities-container">
        <div className="activity-card">
          <div className="activity-image-container">
            <img className="activity-icon" src="/a.jpg" alt="Social Actions" />
          </div>
          <h2 className="activity-title">Actions Sociales</h2>
          <ul className="activity-list">
            <li>Aide humanitaire</li>
            <li>Convois medicaux</li>
            <li>Activites internes au campus</li>
          </ul>
        </div>
        
        <div className="activity-card">
          <div className="activity-image-container">
            <img className="activity-icon" src="/a (1).jpg" alt="Cultural Actions" />
          </div>
          <h2 className="activity-title">Actions Culturelles</h2>
          <ul className="activity-list">
            <li>Evenements culturels campus</li>
            <li>Ateliers et debats</li>
            <li>Expositions et projections</li>
          </ul>
        </div>
      </div>
      
      <h1 className="section-title">LES ACTIVITES DE L'ANNEE PRECEDENTE</h1>
      
      {[
        {
          title: "1er Trimestre",
          activities: [
            "Journée d'intégration : Accueil des nouveaux étudiants|", "                                   ",
            "Séminaire sur le volontariat : Promouvoir l'engagement bénévole|",
            "Journée d'inclusion : Inclusion des étudiants handicapés|",
            "Caravane médicale : Détection précoce des enfants handicapés|"
          ],
          images: ["/image5.jpg", "/image15.jpg", "/image1.jpg", "/image2.jpg"]
        },
        {
          title: "2e Trimestre",
          activities: [
            "Match Day : Matches sportifs|",
            "Game Day : Jeux collaboratifs pour les étudiants|",
            "Projection de film : Sensibilisation sur les maladies rares|",
            "Caravanes médicales : Détection précoce dans divers centres|"
          ],
          images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"]
        },
        {
          title: "3e Trimestre",
          activities: [
            "Journée de la femme: conseils sur la beauté et la santé de la femme|",
            "Salon de l'entreprenariat et du coaching : Encouragement des futurs entrepreneurs|",
            "Henna Day : célébration de Lailat Al Qadr|",
            "Caravanes médicale : caravane au centre de Nouaceur et à Dar Bouazza|"
          ],
          images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"]
        },
        {
          title: "4e Trimestre",
          activities: [
            "Documentaire 'l'art de la Maternité': Hommage aux mères|",
            "Idmaj Day : Rencontre avec la fondation Idmaj et sensibilisation sur l'importance du volontariat|",
            "CIK Island : Activité ludique et compétitive avec une chasse au trésor|",
            "Echange cultuel Maroc-chine : Activité de partage culturel pour renforcer les liens internationaux|"
          ],
          images: ["/image13.jpg", "/image14.jpg", "/image16.jpg", "/image17.jpg"]
        }
      ].map((quarter, index) => (
        <div key={index} className="quarter-section">
          <div className="quarter-info">
            <h2>{quarter.title}</h2>
            <ul>
              {quarter.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>
          <div className="quarter-images">
            {quarter.images.map((image, i) => (
              <img 
                key={i} 
                src={image} 
                alt={`Activity ${index + 1}-${i + 1}`} 
                className="activity-image"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;