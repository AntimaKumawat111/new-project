import React from "react";
import "./App.css";
import Header from "./header";
import HanumanImg from "./Hanuman";
import Tag from "./tags";
import Carousel from "./carousel";
import Paragraph from "./overlayParegraph";
import OverlayImg from "./overlayImage";
import Paragraph2 from "./2nd_Page/2nd_paragraph";

import pottar from "./images/potter 1.png";
import redlayer from "./images/Rectangle 6.png";
import holi from "./images/holi 1.png";
import patt from "./images/patt 1.png";

export default function App() {
  return (
    <>
      <div className="contanir">
        <div className="page1">
          <Header />
          <div className="middleContanir">
            <HanumanImg />
            <div className="rightContanir">
              <p id="p">भजन मंडली की झलकियाँ</p>
              <Tag />
              <Carousel />
            </div>
          </div>

          <img src={pottar} alt="poter1" className="pottarImg" />
          <img src={redlayer} alt="redLayer" className="red-layer" />
          <Paragraph />
          <OverlayImg />
        </div>
        

        <div className="page2">
          <img src={patt} alt="pattImage" id="pattImg" />
          <img src={holi} alt="HolyImg" id="holyImg" />
          <Paragraph2 />
        </div>
      </div>
    </>
  );
}
