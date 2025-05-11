import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

import './Members.css';

const members = [
  { name: "NOUAHAILA EL HOUMA", role: "President", image: "/ph12.jpeg" },
  { name: "DOUAA BASLAM", role: "Vice President", image: "/ph0.jpeg" },
  { name: "AYOUB BELBOU", role: "Vice President & Chef d'organisation", image: "/ph3.jpeg" },
  { name: "OUSSAMA ABOULMAHASSINE EL IDRISSI", role: "Secretaire générale", image: "/ph1.jpeg" },
  { name: "SALMA BEN LAHCEN", role: "Chef soft skils", image: "/ph5.jpeg" },
  { name: "ILYASS SAHIB", role: "Chef de communication", image: "/ph7.jpeg" },
  { name: "ALI OULAHBIB", role: "Chef media", image: "/ph8.jpeg" },
  { name: "MERYEM CHANNOUN", role: "Chef de communication", image: "/ph9.jpeg" },
  { name: "AYMANE MASTOUR", role: "Consseilleur", image: "/ph10.jfif" },
  { name: "AYA CHAARA", role: "Chef media", image: "/ph2.jpeg" },
  { name: "FATIMA ADDIB", role: "Gestionnaire", image: "/ph11.jpeg" },
  { name: "HIBA FALOUH", role: "Gestionnaire", image: "/ph4.jpeg" },
];

function ClubMembers() {
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
    <div className="members-container">
      <h1 className="members-title">NOTRE EQUIPE</h1>
      <div className="members-grid">
        {members.map((member, index) => (
          <motion.div
            className="member-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ClubMembers;
