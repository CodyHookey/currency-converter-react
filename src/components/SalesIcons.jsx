import moneyBillIcon from "../assets/money-bill-transfer-solid.svg";
import calendarIcon from "../assets/calendar-days-solid.svg";

import "../css/SalesIcons.css";

function SalesIcons() {
  return (
    <div className="salesInfo d-md-flex text-center container justify-content-center px-5">
      <div className="fastConversion px-5 mb-5">
        <img
          src={moneyBillIcon}
          alt="Blue bill of money icon"
          className="moneyBillIcon img-fluid mb-1"
        />
        <h2 className="salesIconsH2">Ultra Fast Conversions</h2>
        <p className="salesIconsP">
          Get your conversions quicker than ever with ExchangeFlow
        </p>
      </div>
      <div className="upToDate px-5 mb-5">
        <img
          src={calendarIcon}
          alt="Calendar Icon"
          className="calendarIcon img-fluid mb-1"
        />
        <h2 className="salesIconsH2">Up to Date Currencies</h2>
        <p className="salesIconsP">
          The currencies here are always up to date and ready to convert
        </p>
      </div>
    </div>
  );
}

export default SalesIcons;
