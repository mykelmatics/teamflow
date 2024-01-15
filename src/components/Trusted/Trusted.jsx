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
            <img src="/src/assets/images/hulu.png" alt="hulu" />
            <img src="/src/assets/images/bbc.png" alt="bbc" />
            <img src="/src/assets/images/universal.png" alt="universal" />
            <img src="/src/assets/images/adobe.png" alt="adobe" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
