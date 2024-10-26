import React from "react";
import "./App.css";
import hanuman from "./images/hanuman_1.png";
import kids from "./images/kids 3.png";
import pottar from "./images/potter 1.png";
import redlayer from "./images/Rectangle 6.png";
import holi from "./images/holi 1.png";
import patt from "./images/patt 1.png";

export default function App() {
  return (
    <>
      <div className="contanir">
        <div className="mainContanir">
          {/* Header Section */}
          <div className="header">
            <h5 id="headerheading">कुम्हार समाज सेवा संस्थान, झुंझुनूं</h5>
          </div>

          <div className="middleContanir">
            {/* Hanuman Image */}
            <div className="hanumanImage">
              <img src={hanuman} alt="hanuman" id="hanumanImage" />
            </div>

            <div className="rightContanir">
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

              <p id="p">भजन मंडली की झलकियाँ</p>
              <div className="carousel">
                <div className="ca">
                  <img src={kids} className="imgtag" id="first" alt="Kid 1" />
                  <img src={kids} className="imgtag" id="second" alt="Kid 2" />
                  <img src={kids} className="imgtag" id="third" alt="Kid 3" />
                  <img src={kids} className="imgtag" id="fourth" alt="Kid 4" />
                  <img src={kids} className="imgtag" id="fifth" alt="Kid 5" />
                  <img src={kids} className="imgtag" id="sixth" alt="Kid 6" />
                </div>
              </div>
            </div>
          </div>

          <div className="overlayimages">
            <div className="pottarContanir">
              <img src={pottar} alt="poter1" className="pottarImg" />
              <img src={redlayer} alt="redLayer" className="red-layer" />
            </div>

            <div className="paragraph">
              <h1>सुविचार</h1>
              <div
                style={{
                  height: "2px",
                  width: "68%",
                  backgroundColor: "white",
                  margin: "10px 0",
                }}
              ></div>

              <h1>
                रेत और मिट्टी से हम कहानियों को आकार देते हैं | हर बर्तन एक कृति
                है, जो हाथों से बनी है और जुनून से तपाई गई है | स्वागत है उस
                दुनिया में, जहाँ सृजन हमारा हुनर है और हर कृति में एक अनकही
                कहानी बसी है |
              </h1>
            </div>
            <div className="paragraphImg">
              <img src={kids} className="pImg" />
            </div>
          </div>
        </div>

        <div className="footer">
          <img src={patt} alt="pattImage" id="pattImg" />
          <div className="footerHolyImg">
            <img src={holi} alt="HolyImg" id="holyImg" />
          </div>
          <div className="foot">
            <h4 className="footerparegraph">What we do ?</h4>
            <div
              style={{
                height: "2px",
                width: "68%",
                backgroundColor: "#F97300",
                margin: "10px 0",
              }}
            ></div>
            <h4 className="footerparegraph">
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
