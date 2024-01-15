import Slider from "react-slick";

import QuoteIcon from "../icons/Quote";
import "./style.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial">
      <div className="testimonialWrapper">
        <div className="testimonialHeader">
          <h2>
            Client <br /> <span>Testimonials</span>
          </h2>
        </div>
        <div className="testimonialContentWrapper">
          <img src="/src/assets/images/testimonial-avatar1.png" alt="avatart" className="avatar1" />
          <img src="/src/assets/images/testimonial-avatar2.png" alt="avatart" className="avatar2" />
          <img src="/src/assets/images/testimonial-avatar3.png" alt="avatart" className="avatar3" />
          <img src="/src/assets/images/testimonial-avatar4.png" alt="avatart" className="avatar4" />
          <img src="/src/assets/images/testimonial-avatar5.png" alt="avatart" className="avatar5" />
          <img src="/src/assets/images/testimonial-avatar6.png" alt="avatart" className="avatar6" />
          <Slider {...settings}>
            <div className="testimonialContentCard">
              <div className="testimonialContent">
                <img
                  src="/src/assets/images/avatar (2).png"
                  alt="avatar"
                  className="testimonialPic"
                />
                <div className="testimonialIcon">
                  <QuoteIcon />
                </div>
                <h3 className="testimonialName">Rocky Dixon</h3>
                <p className="testimonialInfo">
                  “The features on monday.com make our team work faster and
                  easier to organize”
                </p>
              </div>
            </div>
            <div className="testimonialContentCard">
              <div className="testimonialContent">
                <img
                  src="/src/assets/images/avatar (2).png"
                  alt="avatar"
                  className="testimonialPic"
                />
                <div className="testimonialIcon">
                  <QuoteIcon />
                </div>
                <h3 className="testimonialName">Rocky Dixon</h3>
                <p className="testimonialInfo">
                  “The features on monday.com make our team work faster and
                  easier to organize”
                </p>
              </div>
            </div>
            <div className="testimonialContentCard">
              <div className="testimonialContent">
                <img
                  src="/src/assets/images/avatar (2).png"
                  alt="avatar"
                  className="testimonialPic"
                />
                <div className="testimonialIcon">
                  <QuoteIcon />
                </div>
                <h3 className="testimonialName">Rocky Dixon</h3>
                <p className="testimonialInfo">
                  “The features on monday.com make our team work faster and
                  easier to organize”
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
