import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./OurMission.css";

const OurMission = () => {
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
      className="mission-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mission-content">
        <div className="mission-text-container">
          <h2 className="mission-title">Mission</h2>
          <p className="mission-text">
            Mobiliser activement les jeunes autour de la lutte contre la précarité, en les impliquant dans des actions concrètes de terrain, tout en promouvant de manière continue les valeurs fondamentales de solidarité, de partage, d'entraide et d'engagement citoyen pour bâtir une société plus juste, inclusive et humaine.
          </p>
        </div>
        <motion.img 
          src="/grapmiss.png" 
          alt="Mission illustration"
          className="mission-image"
          whileHover={{ scale: 1.03 }}
        />
      </div>
    </motion.div>
  );
};

export default OurMission;