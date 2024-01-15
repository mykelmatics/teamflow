import EmailIcon from "../icons/Email";
import SendIcon from "../icons/Send";

import "./style.css";

const Support = () => {
  return (
    <div className="support">
      <div className="supportWrapper">
        <h3 className="supportHeader">Support</h3>
        <p className="supportSubHeader">
          Subscribe Newsletter & get <br /> <span>Company News</span>
        </p>
        <div className="subscribeInputWrapper">
          <div className="subscribeInputLeft">
            <EmailIcon />
            <input type="text" placeholder="Your email" />
          </div>

          <button className="sendButtonSubscriber">
            <SendIcon />
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
