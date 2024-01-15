import './style.css'

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="companyLogoContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <circle cx="17.5" cy="17.5" r="17.5" fill="#FFCA1D" />
          <path
            d="M24.3492 8.80881L21.0343 20.7463L9.62107 25.5662L12.936 13.6287L24.3492 8.80881Z"
            fill="white"
          />
        </svg>
        <span className="companyName">TeamFlow</span>
      </div>
      <div className="navbarContentContainer">
        <div className="navbarContentWrapper">
          <span className="navbarContent">Product</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            className='arrowDown'
          >
            <path d="M1 1L8.5 8L16 1" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="navbarContentWrapper">
          <span className="navbarContent">Solution</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            className='arrowDown'
          >
            <path d="M1 1L8.5 8L16 1" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="navbarContentWrapper">
          <span className="navbarContent">Enterprise</span>
        </div>
        <div className="navbarContentWrapper">
          <span className="navbarContent">Pricing</span>
        </div>
      </div>
      <div className="navbarCtaContainer">
        <div className="loginContainer">
          <span className="loginBtn">Login</span>
        </div>
        <div className="signUpContainer">
          <button className="signUpBtn">Sign Up</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
