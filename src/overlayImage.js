import "./App.css";
import kids from "./images/kids 3.png";

function OverlayImg() {
    return (
        <div className="paragraphImg">
        <img src={kids} className="overlayImage" />
      </div>
    );
}

export default OverlayImg;