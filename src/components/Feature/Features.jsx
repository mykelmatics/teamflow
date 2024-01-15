import PropTypes from "prop-types";
import "./style.css";

const Features = ({
  IconComponent,
  rightContentHeader,
  rightContentText,
  isFeatures,
  isCustomerCare,
  isRowReversed,
  imageUrl,
  isImage,
}) => {
  return (
    <div className={`feature ${isRowReversed && "changeFeatureBackground"}`}>
      <div className="featureWrapper">
        <div className="featureHeader">
          {isFeatures && (
            <h1>
              Our <span>Features</span>
            </h1>
          )}
        </div>
        <div
          className={`featureContentWrapper ${
            isRowReversed && "featureContentWrapperReversed"
          }`}
        >
          <div className="featureLeftContent">
            {isImage ? <img src={imageUrl} alt="user" /> : <IconComponent />}
          </div>
          <div className="featureRightContent">
            <h1 className="featureRightContentHeader">{rightContentHeader}</h1>
            <p className="featureRightContentText">{rightContentText}</p>
            {isCustomerCare && <button className="readMore">Read More</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

Features.propTypes = {
  IconComponent: PropTypes.func,
  rightContentHeader: PropTypes.string,
  rightContentText: PropTypes.string,
  isFeatures: PropTypes.bool,
  isCustomerCare: PropTypes.bool,
  isRowReversed: PropTypes.bool,
  imageUrl: PropTypes.string,
  isImage: PropTypes.bool,
};
