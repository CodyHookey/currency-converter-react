import { Link } from "react-router-dom/cjs/react-router-dom";
import Logo from "../assets/right-left-solid.svg";

import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          <img
            src={Logo}
            alt="ExchangeFlow Logo"
            className="exchangeFlowLogo me-2"
          />
          ExchangeFlow
        </Link>
        <Link to="/contact" className="contactUs nav-link px-2">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
