import React from 'react';
import './HomeCard.css';
import { Link } from 'react-router-dom';

const cardData = [
  {
    icon: "/AboutUsIcon.png",
    link: "/about",
    text: " Interested in the club? Check it out here. →",
    align: "left"
  },
  {
    icon: "/ActivityIcon.png",
    link: "/activities",
    text: "Check Our Activities From there →",
    align: "right"
  },
  {
    icon: "/NewsIcon.png",
    link: "/news",
    text: " Check the Club's News and Events →",
    align: "left"
  },
  {
    icon: "/MembresIcon.png",
    link: "/members",
    text: "Do you want to know our Incredible Club Members →",
    align: "right"
  },
  {
    icon: "/JoinUsIcon.png",
    link: "/join",
    text: " After you saw them, No wonder you want to Join them, This place is for you →",
    align: "left"
  }
];

const HomeCard = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className={`card-wrapper ${card.align}`}>
          {card.align === 'left' && (
            <div className="text-container">
              <p className="card-text">{card.text}</p>
            </div>
          )}
          
          <div className="home-card">
            <div className="icon">
              <img src={card.icon} className="card-image" alt={`${card.link.substring(1)} icon`} />
            </div>
            <Link to={card.link} className="home-card-link">Click here →</Link>
          </div>
          
          {card.align === 'right' && (
            <div className="text-container">
              <p className="card-text">{card.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeCard;