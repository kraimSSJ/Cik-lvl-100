
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';

import "./News.css";

const News=()=>{
    return(
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
              <div className="event-section">
      <h1 className="section-title">CIK Club Events</h1>
      <div className="event-grid">
    
        <div className="event-card">
          <img src="https://i.pinimg.com/736x/61/d9/4d/61d94d0c8646db8ae01dae806ea2710c.jpg" alt="Hackathon" />
          <div className="event-details">
            <h2 className="event-title">CIK Annual Hackathon</h2>
            <p className="event-date-time">📅 May 20, 2025 | 🕐 10:00 AM – 6:00 PM</p>
            <p className="event-description">Join a 48-hour coding battle. Innovate, build, and win prizes!</p>
            <Link className="event-button" to="/*">Learn More</Link>
          </div>
        </div>

       
        <div className="event-card">
          <img src="https://i.pinimg.com/736x/c2/24/b3/c224b3e8b7903a01e5ed93fe2d248681.jpg" alt="Tech Talk" />
          <div className="event-details">
            <h2 className="event-title">AI & Future Tech Talk</h2>
            <p className="event-date-time">📅 May 22, 2025 | 🕐 4:00 PM – 6:00 PM</p>
            <p className="event-description">Discover the impact of artificial intelligence in the modern world.</p>
            <Link className="event-button" to="/*">Join Talk</Link>
          </div>
        </div>

       
        <div className="event-card">
          <img src="https://i.pinimg.com/736x/f0/dc/73/f0dc73ba962b2c63871d816900881bae.jpg" alt="Workshop" />
          <div className="event-details">
            <h2 className="event-title">Frontend Development Workshop</h2>
            <p className="event-date-time">📅 May 25, 2025 | 🕐 1:00 PM – 5:00 PM</p>
            <p className="event-description">Learn how to build stunning websites using HTML, CSS, and JavaScript.</p>
            <Link className="event-button" to="/*">Register</Link>
          </div>
        </div>

     
        <div className="event-card">
          <img src="https://i.pinimg.com/736x/68/ee/59/68ee59eac5c82fe09691bd5d92abfb6a.jpg" alt="Club Meet" />
          <div className="event-details">
            <h2 className="event-title">CIK Member Meet & Greet</h2>
            <p className="event-date-time">📅 May 28, 2025 | 🕐 3:00 PM – 5:00 PM</p>
            <p className="event-description">Meet fellow members, share ideas, and plan future collaborations.</p>
            <Link className="event-button" to="/*">Attend</Link>
          </div>
        </div>

 
        <div className="event-card">
          <img src="https://i.pinimg.com/736x/00/5d/c1/005dc1e96cbd4b8e4755c500c34118bb.jpg" alt="Coding Contest" />
          <div className="event-details">
            <h2 className="event-title">Monthly Coding Challenge</h2>
            <p className="event-date-time">📅 May 30, 2025 | 🕐 5:00 PM – 7:00 PM</p>
            <p className="event-description">Test your skills in this month’s fast-paced coding competition.</p>
            <Link className="event-button" to="/*">Compete</Link>
          </div>
        </div>

      
        <div className="event-card">
          <img src="https://i.pinimg.com/736x/bf/70/12/bf70128da299425dd5ed50f1536dfd4f.jpg" alt="Guest Lecture" />
          <div className="event-details">
            <h2 className="event-title">Guest Lecture: Cybersecurity</h2>
            <p className="event-date-time">📅 June 2, 2025 | 🕐 2:00 PM – 4:00 PM</p>
            <p className="event-description">A deep dive into modern threats and defense strategies in cyber world.</p>
            <Link className="event-button" to="/*">View Details</Link>
          </div>
        </div>

      
        <div className="event-card">
          <img src="https://i.pinimg.com/736x/ae/aa/de/aeaadec00977a2d6931119e361584172.jpg" alt="Portfolio Review" />
          <div className="event-details">
            <h2 className="event-title">Portfolio & Resume Review</h2>
            <p className="event-date-time">📅 June 5, 2025 | 🕐 11:00 AM – 2:00 PM</p>
            <p className="event-description">Get feedback on your resume and portfolio from industry mentors.</p>
          <Link className="event-button" to="/*">Book Slot</Link>
          </div>
        </div>

        <div className="event-card">
          <img src="https://i.pinimg.com/736x/71/5e/92/715e92ca3b2073fdd8ffa747b0aa580d.jpg" alt="Game Night" />
          <div className="event-details">
            <h2 className="event-title">CIK Game Night</h2>
            <p className="event-date-time">📅 June 7, 2025 | 🕐 7:00 PM – 10:00 PM</p>
            <p className="event-description">Unwind and compete in fun games with fellow students and members.</p>
          <Link className="event-button" to="/*">Play Now</Link>
          </div>
        </div>
      </div>
    </div>
    
    <h1 className="section-title">Latest News</h1>
      <div className="news-grid">
    
        <div className="news-card">
          <img src="https://i.pinimg.com/736x/ea/31/db/ea31db8b52aaf1c09e7353896ede0708.jpg" alt="News 1" />
          <div className="news-details">
            <h2 className="news-title">New Tech in Education</h2>
            <p className="news-date">📅 May 10, 2025</p>
            <p className="news-description">How emerging technologies are shaping the future of education.</p>
           <Link className="news-button" to="/*">Read More</Link>
          </div>
        </div>

       
        <div className="news-card">
          <img src="https://i.pinimg.com/736x/4a/de/4b/4ade4b8eeddb282e2629a4087609cd5a.jpg" alt="News 2" />
          <div className="news-details">
            <h2 className="news-title">Innovative Students: A New Era</h2>
            <p className="news-date">📅 May 9, 2025</p>
            <p className="news-description">How students are pushing the boundaries of technology and creativity.</p>
           <Link className="news-button" to="/*">Read More</Link>
          </div>
        </div>

        <div className="news-card">
          <img src="https://i.pinimg.com/736x/92/40/ef/9240ef093578c01b6f4e087ef9989b5a.jpg" alt="News 3" />
          <div className="news-details">
            <h2 className="news-title">CIK Club’s New Projects</h2>
            <p className="news-date">📅 May 8, 2025</p>
            <p className="news-description">CIK announces new initiatives and projects for the next semester.</p>
           <Link className="news-button" to="/*">Read More</Link>
          </div>
        </div>

   
        <div className="news-card">
          <img src="https://i.pinimg.com/736x/9d/35/7e/9d357e697c28159e11703dd9a6ce8156.jpg" alt="News 4" />
          <div className="news-details">
            <h2 className="news-title">Upcoming CIK Conferences</h2>
            <p className="news-date">📅 May 7, 2025</p>
            <p className="news-description">Details about the upcoming CIK Conferences happening this summer.</p>
            <Link className="news-button" to="/*">Read More</Link>
          </div>
    </div>
  </div>

</div>
            
    ) 
}
export default News;