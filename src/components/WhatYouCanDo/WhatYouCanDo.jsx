import { whatYouCandDoArr } from "../../utils/constant";
import "./style.css";

const WhatYouCanDo = () => {
  return (
    <div className="whatYouCanDo">
      <h1 className="whatYouCanDoHeader">
        What you <span>can do?</span>{" "}
      </h1>
      <div className="whatYouCanDoWrapper">
        {whatYouCandDoArr.map(({ id, imageUrl, header, text }) => (
          <div className="whatYouCanDoContentWrapper" key={id}>
            <div className="whatYouCanDoIcon">
              <img src={imageUrl} alt={header} />
            </div>
            <div className="whatYouCanDoContent">
              <h2 className="whatYouCandDoContentHeader">{header}</h2>
              <p className="whatYouCanDoContentText">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouCanDo;
