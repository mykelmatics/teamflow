import Logo from "../icons/Logo";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import TwitterIcon from "../icons/Twitter";
import YoutubeIcon from "../icons/Youtube";
import FooterList from "../FooterList/FooterList";

import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <div className="footerLeftTop">
            <Logo />
            <span>All Rights Reserved © teamflow.com</span>
          </div>
          <div className="footerLeftCenter">
            <span>Address</span>
            <span>26 W 12th St. New York, NY 10342, NYC</span>
          </div>
          <div className="footerLeftBottom">
            <span>Social Media</span>
            <div className="socialMediaWrapper">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YoutubeIcon />
            </div>
          </div>
        </div>
        <div className="footerRight">
          <FooterList
            title="Product"
            menuList={[
              "Product",
              "Pricing",
              "Enterprise",
              "Affiliate",
              "Integrations",
              "Developers",
              "Students",
              "Work OS",
            ]}
          />
          <FooterList
            title="Team"
            menuList={[
              "About Us",
              "Contact Us",
              "Careers",
              "Find a Partner",
              "In the News",
            ]}
          />
          <FooterList
            title="Solutions"
            menuList={[
              "Project Management",
              "Marketing",
              "CRM and Sales",
              "Software Development",
              "Constructions",
              "Creative Production",
              "Remote Work",
              "HR",
              "IT",
              "See More Solutions",
            ]}
          />
          <FooterList
            title="Resources"
            menuList={[
              "Knowledge Base",
              "Guides",
              "Daily Webinars",
              "Community",
              "Customer Stories",
              "Templates",
              "Profesionals Services",
              "Video Tutorials",
              "Blog",
              "Podcast",
            ]}
          />
        </div>
        <div className="socialMediaWrapperMidScreen">
          <div className="socialMediaWrapper">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YoutubeIcon />
          </div>

          <span>All Rights Reserved © teamflow.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
