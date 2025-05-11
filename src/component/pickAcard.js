import { useState } from "react";
import "./pickAcard.css";
const cards = [
  { id: 1, type: "correct", title: " Contribuer à l’amélioration de la qualité de vie des personnes vivantes dans un état de précarité" },
  { id: 2, type: "correct", title: "Inculquer aux étudiants la culture du bénévolat et de la solidarité sociale" },
  { id: 3, type: "correct", title: "Former les étudiants dans le domaine de l’action sociale" },
  { id: 4, type: "correct", title: "Sensibiliser les étudiants à l’entrepreneuriat social" },
  
];


function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function CardGame() {
  const [flippedIds, setFlippedIds] = useState([]); 
 
  const [shuffledCards] = useState(() => shuffleArray(cards)); 

  const handleCardClick = (card) => {
    

    
    if (flippedIds.includes(card.id)) return;

    
    setFlippedIds((prevState) => [...prevState, card.id]);

   
  };

  return (
    <section className="game-container">
      <h1 id="h1obje">Objectifs</h1>
      <div className="card-grid">
        {shuffledCards.map((card) => (
          <div
            key={card.id}
            className={`card ${flippedIds.includes(card.id) ? "flipped" : ""}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="card-front">
                {card.title}
              </div>
              <div className="card-back" />
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}