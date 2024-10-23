import React, { useState } from "react";
import "./App.css";
import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

import hanuman from "./images/hanuman_1.png";
import kids from "./images/kids 3.png";
import pottar from "./images/potter 1.png";
import redlayer from "./images/Rectangle 6.png";
import holi from "./images/holi 1.png";

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
              <a href="#" className="atag">
                About us
              </a>
              <a href="#" className="atag">
                Initiatives
              </a>
              <a href="#" className="atag">
                Blog
              </a>
              <a href="#" className="atag">
                Contact us
              </a>
            </div>

            {/* Sidebar Menu for Mobile View */}
            <div className="show">
              <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <a href="#" onClick={closeMenu}>
                  <CloseIcon id="closeBtn" />
                </a>
                <a href="#" className="showtag">
                  About us
                </a>
                <a href="#" className="showtag">
                  Initiatives
                </a>
                <a href="#" className="showtag">
                  Blog
                </a>
                <a href="#" className="showtag">
                  Contact us
                </a>
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
                  maskImage:
                    "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0))",
                  WebkitMaskImage:
                    "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0))",
                  marginLeft: "2%",
                }}
              />
              <img src={kids} className="imgtag" />
              <img src={kids} className="imgtag" />
              <img src={kids} className="imgtag" />
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

        <div className="pottarContanir">
          <img src={pottar} alt="poter1" className="pottarImg" />
          <img src={redlayer} alt="redLayer" className="red-layer" />
        </div>


        <div className={`overlayimages ${isOpen ? "hideOverlay" : ""}`}>
  <div className="paragraph" style={{ marginRight: "5%" }}>
    <h1 className="pgraph">सुविचार</h1>
    <div
      style={{
        height: "2px",
        width: "68%",
        backgroundColor: "white",
        margin: "10px 0",
      }}
    ></div>

    <h1 className="pgraph">
      रेत और मिट्टी से हम कहानियों को आकार देते हैं | हर बर्तन एक कृति है, जो
      हाथों से बनी है और जुनून से तपाई गई है | स्वागत है उस दुनिया में, जहाँ
      सृजन हमारा हुनर है और हर कृति में एक अनकही कहानी बसी है |
    </h1>
  </div>

  <div className="paragraphImg">
    <img src={kids} id="overlayKidImg" />
  </div>
</div>




        <div className="footer">
          <div className="footerHolyImg">
            <img src={holi} alt="HolyImg" id="holyImg" />
          </div>

          <div className="foot">
            <h4 className="footerData">What we do ?</h4>
            <div
              style={{
                height: "3px",
                width: "75%",
                backgroundColor: "orangered",
                margin: "10px 0",
              }}
            ></div>
            <h4 className="footerData">
              भजन मंडली दवारा हर मंगलवार या शनिवार को भजन का कार्यक्रम होता है,
              जिसकी महिलाएं शामिल होती हैं | संस्थान में सभी हिंदू त्योहारों को
              धूमधाम से मनाया जाता है | यहां महिला सशक्तिकरण, योग तथा अन्य
              कल्याणकारी कार्य भी करवाये जाते हैं |
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
