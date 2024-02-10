import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../styles/Header.css";
const Header = () => {
  return (
    <header id="header" className="header">
      <nav id="nav" className="nav">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-list_item">
              <Link
                to={{
                  pathname: "/",
                }}
                data-link-alt="خانه"
              >
                <span>خانه</span>
              </Link>
            </li>
            <li className="nav-list_item">
              <Link
                to={{
                  pathname: "/services",
                }}
                data-link-alt="خدمات"
              >
                <span>خدمات</span>
              </Link>
            </li>
            <li className="nav-list_item">
              <Link
                to={{
                  pathname: "/",
                }}
                href="#"
                data-link-alt="درباره من"
              >
                <span>درباره من</span>
              </Link>
            </li>
          </ul>
          <div className="nav-logo">
            <div className="nav-logo_img">
              <img src={logo} alt="" />
            </div>
            <div className="nav-logo_text">
              <h3>صاعقه</h3>
              <span>علم وصنعت</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
