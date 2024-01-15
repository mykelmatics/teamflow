import Zoom from "/src/assets/images/zoom.png";
import Slack from "/src/assets/images/slack.png"
import NewTool from "/src/assets/images/newTool.png"
import DropBox from "/src/assets/images/dropbox.png" 
import Drive from "/src/assets/images/drive.png"
import "./style.css";

const ExistingTool = () => {
  return (
    <div className="existingTool">
      <div className="existingToolWrapper">
        <h1 className="existingToolHeader">
          <span>Integrate</span> with your existing tools in a few clicks
        </h1>
        <div className="existingToolContentWrapper">
          <div className="existingToolContentLogos">
            <img src={Zoom} alt="zoom" />
            <img src={NewTool} alt="newTool" />
            <img src={Slack} alt="slack" />
            <img src={DropBox}alt="dropbox" />
            <img src={Drive} alt="drive" />
          </div>
          <button className="viewAllBtn">View All</button>

          <span className="ellipse1"></span>
          <span className="ellipse2"></span>
        </div>
      </div>
    </div>
  );
};

export default ExistingTool;
