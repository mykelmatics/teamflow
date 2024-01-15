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
            <img src="/src/assets/images/zoom.png" alt="zoom" />
            <img src="/src/assets/images/newTool.png" alt="newTool" />
            <img src="/src/assets/images/slack.png" alt="slack" />
            <img src="/src/assets/images/dropbox.png" alt="dropbox" />
            <img src="/src/assets/images/drive.png" alt="drive" />
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
