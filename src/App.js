import React, { useState } from "react";
import "./App.css";
import CloseIcon from '@mui/icons-material/Close';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';

import hanuman from "./images/hanuman_1.png"; 
import kids from "./images/kids 3.png"; 
import pottar from "./images/potter 1.png";
// import holi from "./images/holi 1.png";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0); // state for carousel

  const images = [kids, pottar, kids, pottar]; // array of images for carousel

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.backgroundColor = "rgba(150, 98, 98, 0.5)";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.backgroundColor = "white";
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="mainContanir">
        {/* Header Section */}
        <div className="header">
          <h5 id="headerheading">कुम्हार समाज सेवा संस्थान, झुंझुनूं</h5>
        </div>

        {/* Middle Section */}
        <div className="middleContanir">
          {/* Hanuman Image */}
          <div className="hanumanImage">
            <img src={hanuman} alt="hanuman" id="hanumanImage" />
          </div>

          {/* Right Container */}
          <div className="rightContanir">
            {/* Tags for Desktop View */}
            <div className="tagsContanir">
              <a href="#" className="atag">About us</a>
              <a href="#" className="atag">Initiatives</a>
              <a href="#" className="atag">Blog</a>
              <a href="#" className="atag">Contact us</a>
            </div>

            {/* Sidebar Menu for Mobile View */}
            <div className="show">
              <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <a href="#" onClick={closeMenu}>
                  <CloseIcon id="closeBtn" />
                </a>
                <a href="#" className="showtag">About us</a>
                <a href="#" className="showtag">Initiatives</a>
                <a href="#" className="showtag">Blog</a>
                <a href="#" className="showtag">Contact us</a>
              </div>

              {/* Menu Icon for Sidebar */}
              <div id="mains">
                <MenuIcon id="icon" onClick={openMenu} />
              </div>
            </div>

            {/* Desktop Image Container */}
            <div className="imageContanir">
              <p className="p">भजन मंडली की झलकियां</p>
              <img
                src={kids}
                className="imgtag"
                id="firstKidImage"
                style={{
                  maskImage: "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0))",
                  WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0))",
                  marginLeft: "2%",
                }}
              />
              <img src={kids} className="imgtag" />
              <img src={kids} className="imgtag" />
              <img src={kids} className="imgtag" />
            </div>

            {/* Carousel for Mobile View */}
            <div className="imageSmallContanir">
              <p className="p">भजन मंडली की झलकियां</p>
              <div className="carousel">
                {/* Hide Buttons when Sidebar is open */}
                {!isOpen && (
                  <>
                    <ArrowLeftIcon onClick={prevImage} id="leftRightBtn" />
                    <ArrowRightIcon onClick={nextImage} id="arrowRightBtn" />
                  </>
                )}
                <img
                  src={images[currentImage]}
                  alt="carousel"
                  className="smallImagetag"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

