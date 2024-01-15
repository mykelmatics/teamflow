import Hulu from "/src/assets/images/hulu.png"
import Bbc from "/src/assets/images/bbc.png"
import Universal from "/src/assets/images/universal.png"
import Adobe from "/src/assets/images/adobe.png"
import "./style.css";

const Trusted = () => {
  return (
    <div className="trusted">
      <div className="trustedWrapper">
        <div className="trustedLeft">
          <h1 className="trustedLeftText">
            See why over 100,000 teams choose TeamFlow.com
          </h1>
        </div>
        <div className="trustedRight">
            <img src={Hulu} alt="hulu" />
            <img src={Bbc} alt="bbc" />
            <img  src={Universal} alt="universal" />
            <img src={Adobe} alt="adobe" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
