import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./president.css";

const President = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
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
    <motion.div
      ref={sectionRef}
      className="president-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="president-content">
        <motion.img 
          src="/Nouhaila.png" 
          alt="President" 
          className="president-image"
          whileHover={{ scale: 1.03 }}
        />
        <div className="president-text-container">
          <h2 className="president-title">Mot du Présidente</h2>
          <p className="president-text">
            Bienvenue dans notre club, le lieu où la culture, l'engagement et la créativité se rencontrent pour donner vie à vos idées.
            Rejoignez une communauté dynamique de jeunes motivés, prêts à agir, à apprendre, à partager et à transformer leurs convictions en actions concrètes. 
            Ici, vous n'êtes pas seulement spectateurs : vous êtes les véritables acteurs du changement, porteurs de projets, 
            bâtisseurs de solidarité et ambassadeurs d'un avenir plus juste, inclusif et inspirant. 
            Ensemble, faisons résonner vos voix et la force de vos idées.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default President;