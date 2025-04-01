import { Link } from "react-router-dom/cjs/react-router-dom";
import Logo from "../assets/right-left-solid.svg";
import Mail from "../assets/envelope-solid.svg";
import Phone from "../assets/phone-solid.svg";

import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container mt-5 py-4">
        <div className="row">
          <div className="col-md-12 text-center text-lg-start col-lg-4 mb-2 mb-lg-0 footerListOne">
            <Link to="/" className="navbar-brand footerBrand fw-bold">
              <img
                src={Logo}
                alt="ExchangeFlow Logo"
                className="exchangeFlowLogo me-2"
              />
              ExchangeFlow
            </Link>
            <p className="mt-3 smallText">
              Created By Cody Hookey for Altcademy Project 2025
            </p>
            <p className="smallText">
              Using <a href="https://frankfurter.dev/">Frankfurter API </a>
              for rates
            </p>
            <p className="smallText">
              <a href="https://www.vecteezy.com/free-png/smartphone-interface">
                Smartphone Interface PNGs by Vecteezy
              </a>
            </p>
          </div>
          <div className=" text-center col-sm-12 col-md-6 col-lg-4 mb-2 mb-lg-0 footerListTwo">
            <h5 className="footerHeadings">Useful Links</h5>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
            <p>
              <a href="https://cody-hookey.dev/" target="_blank">
                My Portfolio
              </a>
            </p>
          </div>
          <div className="text-center col-sm-12 col-md-6 col-lg-4 footerListThree">
            <h5 className="footerHeadings">Contact Info</h5>
            <p>
              <img
                src={Mail}
                alt="Envelope Icon"
                className="footerIcons me-2"
              />
              <a href="#">support@exchangeflow.com</a>
            </p>
            <p>
              <img
                src={Phone}
                alt="Telephone Icon"
                className="footerIcons me-2"
              />
              <a href="#">+44 (0)7912 345 678</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
