import moneyBillIcon from "../assets/money-bill-transfer-solid.svg";
import calendarIcon from "../assets/calendar-days-solid.svg";

import "../css/SalesIcons.css";

function SalesIcons() {
  return (
    <div className="salesInfo d-md-flex text-center container">
      <div className="fastConversion p-1">
        <img
          src={moneyBillIcon}
          alt="Blue bill of money icon"
          className="moneyBillIcon img-fluid mb-1"
        />
        <h2>Ultra Fast Conversions</h2>
        <p>Get your conversions quicker than ever with ExchangeFlow</p>
      </div>
      <div className="upToDate p-1">
        <img
          src={calendarIcon}
          alt="Calendar Icon"
          className="calendarIcon img-fluid mb-1"
        />
        <h2>Up to Date Currencies</h2>
        <p>The currencies here are always up to date and ready to convert</p>
      </div>
    </div>
  );
}

export default SalesIcons;
