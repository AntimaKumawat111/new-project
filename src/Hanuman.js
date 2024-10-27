import "./App.css";
import hanuman from "./images/hanuman_1.png";

function HanumanImg(){
    return (
        <>
         <div className="hanumanImage">
              <img src={hanuman} alt="hanuman" id="hanumanImage" />
            </div>
        </>
    );
}

export default HanumanImg;
