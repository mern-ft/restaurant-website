import "./Master.css";
import cb from "../assets/cb.png";

function Master() {
  return (
    <div className="big-main">
      <div className="big-text">
        CHEESE BURGER<br/>Flat 50% off 
      </div>
      <img className="big-img" src={cb} alt="cb" />
    </div>
  );
}

export default Master;
