// src/App.js
import React, { useState } from "react";
import ScrollToTop from "./component/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './component/hero';
import President from './component/president';
import ImageSlider from './component/imageSlider';
import NotFound from "./pages/NotFound"; 
import OurMission from "./component/OurMission";
import About from "./pages/AboutUs";
import Activities from "./pages/Activities";
import News from "./pages/News";
import Members from "./pages/Members";
import HomeCard from "./component/HomeCard";
import JoinUs from "./pages/JoinUs";
import "./App.css";
function App() {
  const [showSite, setShowSite] = useState(false);
  const [hideImgs, setHideImgs] = useState(false);
  const handleClick = () => {
    setShowSite(true);
    setTimeout(() => setHideImgs(true), 600);
    setTimeout(() => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }, 700);
  };
  return (
    <div id="body">
      {!hideImgs && (
        <>
          <img
            id="img"
            src="/Untitled design.jpg"
            alt="design 1"
            className={showSite ? "slide-left" : ""}
          />
          <img
            id="img1"
            src="/Untitled design (1).jpg"
            alt="design 2"
            className={showSite ? "slide-right" : ""}
          />
        </>
      )}
      {!showSite && (
        <button id="hr" onClick={handleClick}>
          Come to Cik Empire
        </button>
      )}
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
             
              <President />
              <OurMission />
              <ImageSlider />
              <HomeCard />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/news" element={<News />} />
          <Route path="/members" element={<Members />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
