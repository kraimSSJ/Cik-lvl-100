import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion";
import "./AboutUs.css";
import CardGameSection from '../component/pickAcard';
import Partenaires from "../component/partenaires";

const AboutUs = () => {
  const [typedText, setTypedText] = useState("");
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const fullText = `Depuis notre accréditation par la Faculté des Sciences Ben M'Sik en 2015 et par l’Université Hassan II en 2024, le Club CIK pour l’action sociale et culturelle est un espace dynamique où les membres se réunissent pour promouvoir des initiatives qui renforcent le tissu social de leur communauté.
Ce club organise diverses activités, telles que des ateliers, des événements culturels et des projets de bénévolat, visant à sensibiliser les participants aux enjeux sociaux tout en célébrant la diversité culturelle.

Le club s’engage à promouvoir la diversité, l’inclusion et le bien-être de la communauté étudiante à travers des campagnes de sensibilisation, des événements culturels, des actions caritatives et des initiatives de soutien.

Nos activités comprennent des jeux socioéducatifs, des ateliers culturels, des bénévolats communautaires, des discussions sur les enjeux sociaux, des formations et des manifestations culturelles. En collaborant avec d’autres clubs et organismes sociaux et culturels, nous célébrons la diversité et nous encourageons l’engagement étudiant.`;

  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 5);
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <div>
      
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

      
      <motion.div
  ref={sectionRef}
  className={`content-responsive ${isVisible ? "visible" : ""}`}
  initial="hidden"
  animate={controls}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div id="container1">
    <h2>Histoire Du Club</h2>
    <p className="typed-text">{typedText}</p>
  </div>

  <video
    width="100%"
    autoPlay
    loop
    muted
    playsInline
    id="video1"
  >
    <source src="/Volunteer Work.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>
      <CardGameSection/>
      <Partenaires/>
    </div>
  );
};

export default AboutUs;
