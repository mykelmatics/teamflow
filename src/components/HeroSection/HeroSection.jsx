import Navbar from "../Navbar/Navbar";
import Lucy from '/src/assets/images/Lucy.png'
import GrayBg from "/src/assets/svgs/grayBackground.svg"
import Circle from "/src/assets/svgs/heroCircularLine.svg"
import CircularArrow from "/src/assets/images/circularArrow.png"
import Rectangle from "/src/assets/images/Rectangle.png"
import Rectangle1 from "/src/assets/images/Rectangle1.png"
import Max from "/src/assets/images/maxImg.png"
import "./style.css";

const HeroSection = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="heroBackground">
          <div className="navbarContainer">
            <Navbar />
          </div>
          <div className="heroContentContainer">
            <div className="heroContentWrapper">
              <div className="heroLeftContainer">
                <svg
                  className="purpleCircle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <circle cx="11" cy="11" r="11" fill="#B16EE6" />
                </svg>
                <svg
                  className="polygon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="38"
                  viewBox="0 0 35 38"
                  fill="none"
                >
                  <path
                    d="M2.67713 34.2987L7.51857 4.37699L31.0108 23.5307L2.67713 34.2987Z"
                    stroke="#F8C953"
                    strokeWidth="4"
                  />
                </svg>
                <img
                  className="circularArrow"
                  src={CircularArrow}
                  alt=""
                />
                <div className="welcomeText">👋 Welcome to TeamFlow</div>
                <div className="heroTagLine">
                  Work the way that works for you
                </div>
                <div className="heroLine"></div>
                <div className="heroSecondTagLine">
                  Create, Build, Collaborate and ship products very faster{" "}
                </div>
                <div className="heroCtaBtnWrapper">
                  <button className="heroCtaBtn">Get Started</button>
                </div>
              </div>
              <div className="heroRightContainer">
                <div className="square"></div>
                <div className="lucyContainer">
                  <img
                    className="circularImg"
                    src={Circle}
                    alt="circle"
                  />
                  <img
                    className="grayBg"
                    src={GrayBg}
                    alt="grayBackground"
                  />
                  <img
                    className="lucyImg"
                    src={Lucy}
                    alt="lucy"
                  />
                  <div className="lucy">Lucy</div>
                </div>
                <div className="lucyTagContainer">
                  <img src={Rectangle} alt="rectangle" />
                  <div className="doneBtn">Done</div>
                  <p className="lucyNana">Lucy Niana</p>
                  <p className="lucyNana role">Lucy Niana</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="117"
                    height="23"
                    viewBox="0 0 117 23"
                    fill="none"
                    className="lucyNana star"
                  >
                    <path
                      d="M11.8299 0.547729L15.1023 7.13253L22.4197 8.18846L17.1248 13.314L18.3748 20.5514L11.8299 17.1344L5.28501 20.5514L6.53497 13.314L1.24005 8.18846L8.55745 7.13253L11.8299 0.547729Z"
                      fill="#FFCD1A"
                    />
                    <path
                      d="M35.2715 0.547729L38.544 7.13253L45.8614 8.18846L40.5665 13.314L41.8164 20.5514L35.2715 17.1344L28.7267 20.5514L29.9766 13.314L24.6817 8.18846L31.9991 7.13253L35.2715 0.547729Z"
                      fill="#FFCD1A"
                    />
                    <path
                      d="M58.7132 0.547729L61.9856 7.13253L69.303 8.18846L64.0081 13.314L65.2581 20.5514L58.7132 17.1344L52.1683 20.5514L53.4183 13.314L48.1233 8.18846L55.4408 7.13253L58.7132 0.547729Z"
                      fill="#FFCD1A"
                    />
                    <path
                      d="M82.1548 0.547729L85.4273 7.13253L92.7447 8.18846L87.4498 13.314L88.6997 20.5514L82.1548 17.1344L75.61 20.5514L76.8599 13.314L71.565 8.18846L78.8824 7.13253L82.1548 0.547729Z"
                      fill="#FFCD1A"
                    />
                    <path
                      d="M105.597 0.547729L108.869 7.13253L116.187 8.18846L110.892 13.314L112.142 20.5514L105.597 17.1344L99.0519 20.5514L100.302 13.314L95.0069 8.18846L102.324 7.13253L105.597 0.547729Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </div>
                <div className="maxTagContainer">
                  <div className="maxCard">
                    <img
                      src={Rectangle1}
                      alt="rectangle"
                    />
                    <p className="mark">Mark Anderson</p>
                    <p className="markRole">Update Contract Agreement</p>
                    <svg
                      className="markStar"
                      xmlns="http://www.w3.org/2000/svg"
                      width="140"
                      height="27"
                      viewBox="0 0 140 27"
                      fill="none"
                    >
                      <path
                        d="M14.1794 0.292847L18.0952 8.22712L26.8512 9.49944L20.5153 15.6754L22.011 24.396L14.1794 20.2787L6.34778 24.396L7.84348 15.6754L1.50759 9.49944L10.2636 8.22712L14.1794 0.292847Z"
                        fill="#FFCD1A"
                      />
                      <path
                        d="M42.2302 0.292847L46.146 8.22712L54.9019 9.49944L48.566 15.6754L50.0617 24.396L42.2302 20.2787L34.3986 24.396L35.8943 15.6754L29.5584 9.49944L38.3144 8.22712L42.2302 0.292847Z"
                        fill="#FFCD1A"
                      />
                      <path
                        d="M70.28 0.292847L74.1958 8.22712L82.9517 9.49944L76.6159 15.6754L78.1116 24.396L70.28 20.2787L62.4484 24.396L63.9441 15.6754L57.6082 9.49944L66.3642 8.22712L70.28 0.292847Z"
                        fill="#FFCD1A"
                      />
                      <path
                        d="M98.3305 0.292847L102.246 8.22712L111.002 9.49944L104.666 15.6754L106.162 24.396L98.3305 20.2787L90.4989 24.396L91.9946 15.6754L85.6587 9.49944L94.4147 8.22712L98.3305 0.292847Z"
                        fill="#FFCD1A"
                      />
                      <path
                        d="M126.381 0.292847L130.297 8.22712L139.053 9.49944L132.717 15.6754L134.213 24.396L126.381 20.2787L118.549 24.396L120.045 15.6754L113.709 9.49944L122.465 8.22712L126.381 0.292847Z"
                        fill="#FFCD1A"
                      />
                    </svg>
                  </div>
                  <div className="maxImgWrapper">
                    <img
                      className="maxImg"
                      src={Max}
                      alt="max"
                    />
                    <div className="max">Max</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="945"
            height="244"
            viewBox="0 0 945 244"
            fill="none"
            className="topWave"
          >
            <path
              d="M9.71699 137.628C-239.378 126.022 -290.029 271.672 -370.663 238.033C-374.295 77.2372 -419.478 -239.064 -413.383 -248.754C-407.288 -258.444 460.569 -239.944 943.037 -239.124L944.077 -82.3315C842.07 14.837 923.445 40.3011 553.035 35.4648C291.355 32.0482 288.54 150.62 9.71699 137.628Z"
              // fill="white"
              fillOpacity="0.04"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1116"
            height="307"
            viewBox="0 0 1116 307"
            fill="none"
            className="secondTopWave"
          >
            <path
              d="M180.717 200.628C-68.3777 189.022 -119.029 334.672 -199.663 301.033C-203.295 140.237 -248.478 -176.064 -242.383 -185.754C-236.288 -195.444 631.569 -176.944 1114.04 -176.124L1115.08 -19.3315C1013.07 77.837 1094.44 103.301 724.035 98.4648C462.355 95.0482 459.54 213.62 180.717 200.628Z"
              // fill="white"
              fillOpacity="0.04"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1888"
            height="977"
            viewBox="0 0 1888 977"
            fill="none"
          >
            <path d="M0 0L1888 0V977H0V0Z" fill="#FAFAFF" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1300"
            height="977"
            viewBox="0 0 1300 977"
            fill="none"
            className="heroBlueLayout hide"
          >
            <path d="M0 0L1300 0L981.5 977H0V0Z" fill="#4B4AEF" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="887"
            height="357"
            viewBox="0 0 887 357"
            fill="none"
            className="bottomWave"
          >
            <path
              d="M65.4809 46.6505C-66.2958 -25.5392 -229.905 1.86612 -295.237 24.5925C-297.322 131.54 -300.241 347.04 -295.237 353.457C-290.233 359.874 495.006 356.131 887 353.457V249.183C803.597 185.014 724.364 130.872 480.411 158.946C294.072 180.389 230.202 136.888 65.4809 46.6505Z"
              // fill="white"
              fillOpacity="0.04"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1026"
            height="282"
            viewBox="0 0 1026 282"
            fill="none"
            className="secondBottomWave"
          >
            <path
              d="M191.946 25.5761C57.1691 -21.9203 -104.937 8.57131 -169.143 29.7541C-166.448 111.627 -159.738 276.527 -154.456 281.141C-149.174 285.754 634.561 237.092 1025.77 212.185L1021.11 132.477C934.985 88.2908 853.469 51.5254 611.184 87.2141C426.12 114.474 360.416 84.9466 191.946 25.5761Z"
              // fill="white"
              fillOpacity="0.04"
            />
          </svg>
        </div>
      </div>
      <>
        <div className="midHero">
          <div className="midHeroNav">
            <div className="midHeroLeft">
              <svg
                width="202"
                height="45"
                viewBox="0 0 202 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.32 11.82V15.18H55.47V33H51.24V15.18H45.42V11.82H61.32ZM79.2785 24.06C79.2785 24.48 79.2285 24.96 79.1285 25.5H66.9485C67.0085 26.98 67.4085 28.07 68.1485 28.77C68.8885 29.47 69.8085 29.82 70.9085 29.82C71.8885 29.82 72.6985 29.58 73.3385 29.1C73.9985 28.62 74.4185 27.97 74.5985 27.15H79.0685C78.8485 28.31 78.3785 29.35 77.6585 30.27C76.9385 31.19 76.0085 31.91 74.8685 32.43C73.7485 32.95 72.4985 33.21 71.1185 33.21C69.4985 33.21 68.0585 32.87 66.7985 32.19C65.5385 31.49 64.5585 30.5 63.8585 29.22C63.1585 27.94 62.8085 26.43 62.8085 24.69C62.8085 22.95 63.1585 21.44 63.8585 20.16C64.5585 18.86 65.5385 17.87 66.7985 17.19C68.0585 16.51 69.4985 16.17 71.1185 16.17C72.7585 16.17 74.1885 16.51 75.4085 17.19C76.6485 17.87 77.5985 18.81 78.2585 20.01C78.9385 21.19 79.2785 22.54 79.2785 24.06ZM75.0185 23.64C75.0785 22.28 74.7185 21.25 73.9385 20.55C73.1785 19.85 72.2385 19.5 71.1185 19.5C69.9785 19.5 69.0185 19.85 68.2385 20.55C67.4585 21.25 67.0285 22.28 66.9485 23.64H75.0185ZM88.7913 16.17C90.1913 16.17 91.3913 16.5 92.3913 17.16C93.3913 17.82 94.1013 18.71 94.5213 19.83V16.38H98.7213V33H94.5213V29.52C94.1013 30.64 93.3913 31.54 92.3913 32.22C91.3913 32.88 90.1913 33.21 88.7913 33.21C87.3913 33.21 86.1313 32.87 85.0113 32.19C83.8913 31.51 83.0113 30.53 82.3713 29.25C81.7513 27.95 81.4413 26.43 81.4413 24.69C81.4413 22.95 81.7513 21.44 82.3713 20.16C83.0113 18.86 83.8913 17.87 85.0113 17.19C86.1313 16.51 87.3913 16.17 88.7913 16.17ZM90.1113 19.86C88.7913 19.86 87.7313 20.29 86.9313 21.15C86.1313 22.01 85.7313 23.19 85.7313 24.69C85.7313 26.19 86.1313 27.37 86.9313 28.23C87.7313 29.07 88.7913 29.49 90.1113 29.49C91.3913 29.49 92.4413 29.06 93.2613 28.2C94.1013 27.32 94.5213 26.15 94.5213 24.69C94.5213 23.21 94.1013 22.04 93.2613 21.18C92.4413 20.3 91.3913 19.86 90.1113 19.86ZM123.705 16.14C125.725 16.14 127.315 16.77 128.475 18.03C129.655 19.27 130.245 21.04 130.245 23.34V33H126.045V23.82C126.045 22.54 125.715 21.56 125.055 20.88C124.415 20.18 123.525 19.83 122.385 19.83C121.205 19.83 120.265 20.2 119.565 20.94C118.865 21.68 118.515 22.76 118.515 24.18V33H114.315V23.82C114.315 22.54 113.985 21.56 113.325 20.88C112.685 20.18 111.795 19.83 110.655 19.83C109.475 19.83 108.535 20.2 107.835 20.94C107.135 21.68 106.785 22.76 106.785 24.18V33H102.555V16.38H106.785V19.53C107.225 18.45 107.915 17.62 108.855 17.04C109.815 16.44 110.925 16.14 112.185 16.14C113.525 16.14 114.685 16.46 115.665 17.1C116.665 17.74 117.415 18.66 117.915 19.86C118.435 18.72 119.205 17.82 120.225 17.16C121.265 16.48 122.425 16.14 123.705 16.14ZM147.101 11.82V15.18H138.191V20.85H145.331V24.09H138.191V33H133.961V11.82H147.101ZM154.187 10.8V33H149.957V10.8H154.187ZM165.694 16.17C167.314 16.17 168.764 16.51 170.044 17.19C171.344 17.87 172.364 18.86 173.104 20.16C173.844 21.44 174.214 22.95 174.214 24.69C174.214 26.43 173.844 27.94 173.104 29.22C172.364 30.5 171.344 31.49 170.044 32.19C168.764 32.87 167.314 33.21 165.694 33.21C164.074 33.21 162.614 32.87 161.314 32.19C160.034 31.49 159.024 30.5 158.284 29.22C157.544 27.94 157.174 26.43 157.174 24.69C157.174 22.95 157.544 21.44 158.284 20.16C159.024 18.86 160.034 17.87 161.314 17.19C162.614 16.51 164.074 16.17 165.694 16.17ZM165.694 19.83C164.514 19.83 163.514 20.25 162.694 21.09C161.874 21.91 161.464 23.11 161.464 24.69C161.464 26.27 161.874 27.48 162.694 28.32C163.514 29.14 164.514 29.55 165.694 29.55C166.874 29.55 167.874 29.14 168.694 28.32C169.514 27.48 169.924 26.27 169.924 24.69C169.924 23.11 169.514 21.91 168.694 21.09C167.874 20.25 166.874 19.83 165.694 19.83ZM200.993 16.38L196.523 33H191.843L188.273 20.91L184.613 33H179.933L175.493 16.38H179.723L182.423 29.22L186.113 16.38H190.583L194.303 29.22L197.033 16.38H200.993Z"
                  fill="white"
                />
                <circle cx="17.5" cy="21.5" r="17.5" fill="#FFCA1D" />
                <path
                  d="M24.3492 12.8088L21.0343 24.7463L9.62107 29.5662L12.936 17.6287L24.3492 12.8088Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="midHeroRight">
              <button className="login">Login</button>
              <button className="sign-in">Sign Up</button>
            </div>
          </div>
          <div className="midHeroSection">
            <div className="midHeroSectionWrapper">
              <div className="midHeroTop">
                <h3>👋 Welcome to TeamFlow</h3>
              </div>
              <div className="midHeroCenter">
                <h1>Work the way that works for you</h1>
                <div className="midHeroCenterSubTag">
                  <p>
                    Create, Build, Collaborate and ship products very faster
                  </p>
                </div>
              </div>
              <button className="midHeroButton">Get Started</button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="squareBox"
              >
                <rect
                  x="2.68409"
                  y="16.5895"
                  width="31.0369"
                  height="31.0369"
                  transform="rotate(-26.6171 2.68409 16.5895)"
                  stroke="#6CE1B7"
                  strokeWidth="4"
                />
              </svg>
              <svg
                width="69"
                height="72"
                viewBox="0 0 69 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="#6CE1B7"
                  strokeWidth="4"
                />
                <g filter="url(#filter0_d_4621_21)">
                  <path
                    d="M56 34.0502L45.5504 38.6918L53.9856 47.2222L47.8165 53.2437L39.3813 44.8387L34.3453 55L21 20L56 34.0502Z"
                    fill="white"
                  />
                  <path
                    d="M56 34.0502L45.5504 38.6918L53.9856 47.2222L47.8165 53.2437L39.3813 44.8387L34.3453 55L21 20L56 34.0502Z"
                    stroke="#6CE1B7"
                    strokeWidth="2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_4621_21"
                    x="9.25122"
                    y="12.2205"
                    width="59.3171"
                    height="59.2727"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.267483 0 0 0 0 0.281291 0 0 0 0 0.645833 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4621_21"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4621_21"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="35"
                height="38"
                viewBox="0 0 35 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="triangle"
              >
                <path
                  d="M2.67713 34.2987L7.51857 4.37699L31.0108 23.5307L2.67713 34.2987Z"
                  stroke="#F8C953"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default HeroSection;
