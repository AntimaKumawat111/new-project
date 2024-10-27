import "./App.css";
import kids from "./images/kids 3.png";

function Carousel(){
    return (
        <>
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
        </>
    );
}
export default Carousel;