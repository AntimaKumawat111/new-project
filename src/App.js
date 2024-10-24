import React from "react";
import "./App.css";
// import CloseIcon from "@mui/icons-material/Close";
// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import MenuIcon from "@mui/icons-material/Menu";

import hanuman from "./images/hanuman_1.png";
import kids from "./images/kids 3.png";
import pottar from "./images/potter 1.png";
import redlayer from "./images/Rectangle 6.png";
import holi from "./images/holi 1.png";

export default function App() {
  return (
    <>
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

            <div className="imageContanir">
              <p id="p">भजन मंडली की झलकियां</p>
              <img src={kids} className="imgtag" id="firstKidImage" />
              <img src={kids} className="imgtag" id="secondKidImage" />
              <img src={kids} className="imgtag" id="thirdKidImg" />
              <img src={kids} className="imgtag" id="fouthKidImg" />
              <img src={kids} className="imgtag" id="fifthKidImg" />
              <img src={kids} className="imgtag" id="sixthKidImg" />
            </div>
          </div>
        </div>

        <div className="overlayimages">
          <div className="pottarContanir">
            <img src={pottar} alt="poter1" className="pottarImg" />
            <img src={redlayer} alt="redLayer" className="red-layer" />
          </div>

          <div className="paragraph" style={{ marginRight: "5%" }}>
            <h1 id="paregraphHeading">सुविचार</h1>
            <div
              style={{
                height: "2px",
                width: "68%",
                backgroundColor: "white",
                margin: "10px 0",
              }}
            ></div>

            <h1 id="paragraphparagraph">
              रेत और मिट्टी से हम कहानियों को आकार देते हैं | हर बर्तन एक कृति
              है, जो हाथों से बनी है और जुनून से तपाई गई है | स्वागत है उस
              दुनिया में, जहाँ सृजन हमारा हुनर है और हर कृति में एक अनकही कहानी
              बसी है |
            </h1>
          </div>
          <div className="paragraphImg">
            <img src={kids} id="overlayKidImg" className="pImg" />
          </div>
        </div>
      </div>



      <div className="footer">
        {/* <div className="footerHolyImg">
          <img src={holi} alt="HolyImg" id="holyImg" />
        </div> */}

        {/* <div className="foot">
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
        </div> */}
      </div>

    </>
  );
}
