import Slider from "react-slick";
import Avatar1 from "/src/assets/images/testimonial-avatar1.png"
import Avatar2 from "/src/assets/images/testimonial-avatar2.png"
import Avatar3 from "/src/assets/images/testimonial-avatar3.png"
import Avatar4 from "/src/assets/images/testimonial-avatar4.png"
import Avatar5 from "/src/assets/images/testimonial-avatar5.png"
import Avatar6 from "/src/assets/images/testimonial-avatar6.png"
import TestimonialPic from "/src/assets/images/avatar (2).png"
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
          <img src={Avatar1} alt="avatart" className="avatar1" />
          <img src={Avatar2} alt="avatart" className="avatar2" />
          <img src={Avatar3} alt="avatart" className="avatar3" />
          <img src={Avatar4}alt="avatart" className="avatar4" />
          <img src={Avatar5} alt="avatart" className="avatar5" />
          <img src={Avatar6} alt="avatart" className="avatar6" />
          <Slider {...settings}>
            <div className="testimonialContentCard">
              <div className="testimonialContent">
                <img
                  src={TestimonialPic}
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
                  src={TestimonialPic}
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
                  src={TestimonialPic}
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
