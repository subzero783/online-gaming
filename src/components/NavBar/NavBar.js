import "./NavBar.scss";
import logo from "../img/online-gaming-logo.png";

const NavBar = () => {
  return (
    <nav id="top-nav-bar">
      <div className="container">
        <div className="row">
          <div className="column-1 col col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <img
              src={logo}
              alt="Online Gaming logo"
            />
            <p className="logo-text">GELRO</p>
          </div>
          <div className="col col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <ul className="top-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#game">Game</a>
              </li>
              <li>
                <a href="#lottery">Lottery</a>
              </li>
              <li>
                <a href="#pages">Pages</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="column-3 col col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <a href="#sign-in">Sign In</a>
            <a
              href="#sign-up"
              className="button-1"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
