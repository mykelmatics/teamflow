import PropTypes from "prop-types";
import "./style.css";

const FooterList = ({ title, menuList }) => {
  return (
    <div className="footerList">
      <div className="footerListTitle">
        <h2> {title}</h2>
    
        
      </div>
      <div className="footerListMenuWrapper">
        {menuList.map((menuItem, index) => (
          <div className="footerListMenu" key={index}>
            {menuItem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterList;

FooterList.propTypes = {
  title: PropTypes.string,
  menuList: PropTypes.array,
};
