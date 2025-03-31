import phoneDemo from "../assets/vecteezy_smartphone-interface_11653234.png";

import "../css/InfoTabs.css";

function InfoTabs() {
  return (
    <div className="text-center text-md-start container">
      <div className="row justify-content-between">
        <div className="aboutUs px-3 pt-3 me-3 col-12 col-lg-5 mb-3 mb-lg-0">
          <h2>About Us</h2>
          <p>
            At ExchangeFlow, we’re redefining how the world swaps currency. Born
            from a passion for seamless tech and global connectivity, we deliver
            instant, reliable exchange rates to empower traveler's, traders, and
            dreamers alike. With a sleek platform built for speed and reach,
            we’re here to make every transaction effortless—because borders
            shouldn’t slow you down.
          </p>
        </div>
        <div className="comingSoon d-md-flex px-3 pt-3 col-12 col-lg-6">
          <div className="pe-md-4">
            <h2>Coming Soon</h2>
            <p>
              Get ready to swap fast and reach far on the go—our ExchangeFlow
              mobile app is launching soon, bringing instant currency conversion
              right to your pocket.
            </p>
          </div>
          <div className="imgContainer">
            <img
              src={phoneDemo}
              alt="Mobile phone demo"
              className="iphoneImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoTabs;
