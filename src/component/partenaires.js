import { useState } from "react";
import "./partenaires.css";

const partenairesData = [
  {
    id: 1,
    name:"MAINES BLANCHES",
    logo: "/partenaire1.jpg",
    description: "L'Association Mains Blanches est une organisation humanitaire engagée dans l’amélioration des conditions de vie des personnes vulnérables, en particulier des personnes âgées en situation de précarité. Elle offre une aide concrète dans des domaines tels que les soins médicaux à domicile, le soutien alimentaire, et l’accompagnement social. L’association lutte également contre l'isolement en organisant des visites régulières et des activités récréatives pour ses bénéficiaires.Grâce à l’engagement de ses bénévoles et partenaires, Mains Blanches œuvre pour une société plus solidaire, où chaque individu, quel que soit son âge, peut vivre avec dignité et respect",
  },
  {
    id: 2,
    name:"IDMAJ",
    logo: "/partenaire2.jpg",
    description: "L'Association Idmaj est une organisation marocaine à but non lucratif dédiée à l'insertion sociale et professionnelle des jeunes. Elle propose des programmes éducatifs, des formations et des projets d’insertion visant à améliorer l’employabilité et l’autonomie des jeunes. L’association met aussi l’accent sur l'innovation, l'entrepreneuriat et les échanges interculturels pour favoriser la solidarité et le développement des compétences essentielles.",
  },
];

export default function PartenairesPage() {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards((prev) => [...prev, id]);
    }
  };

  return (
    <section className="partners-section">
      <h1 className="partners-title">Partenaires</h1>
      <div className="partners-card-container">
        {partenairesData.map((item) => ( 
          <div
            key={item.id}
            className={`partner-flip-card ${flippedCards.includes(item.id) ? "is-flipped" : ""}`}
            onClick={() => toggleFlip(item.id)}
          >
            <div className="partner-card-inner">
            <div className="partner-card-front">
  
    <p className="name-t">{item.name}</p>
    <img src={item.logo} alt={`Logo Partenaire ${item.id}`} className="partner-logo" />
  
</div>

              <div className="partner-card-back">
                <p className="partner-desc">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
