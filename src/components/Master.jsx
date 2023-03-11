import "./Master.css";
import cb from "../assets/cb.png";

function Master() {
  return (
    <div className="big-main">
      <div className="big-text">
        CHEESE <span>BURGER</span>
        <br />
        If you ask us,<br/> it just tastes better
      </div>
      <img className="big-img" src={cb} alt="cb" />
    </div>
  );
}

export default Master;
