import React from "react";
import { Link } from "react-router-dom";
import { checkStatus, json } from "../utils/checkStatus";

import "../css/CurrencyTable.css";

class CurrencyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.baseCurrency !== this.props.baseCurrency) {
      this.fetchCurrencies();
    }
  }

  fetchCurrencies() {
    fetch(
      `https://api.frankfurter.dev/v1/latest?base=${this.props.baseCurrency}`
    )
      .then(checkStatus)
      .then(json)
      .then((response) => {
        let entries = Object.entries(response.rates);
        this.setState({
          currencies: entries,
        });
      });
  }

  handleChange(event) {
    const selectedCurrency = event.target.value;
    this.setState({ baseCurrency: selectedCurrency }, () => {
      this.fetchCurrencies();
    });
  }

  render() {
    return (
      <div className="scrollable-table-container mb-5">
        <table className="table">
          <thead>
            <tr className="table-names">
              <th>Currency ({this.props.baseCurrency})</th>
              <th>Amount (1.0000)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="baseRow">
              <td>{this.props.baseCurrency}</td>
              <td>1.0000</td>
            </tr>
            {this.state.currencies.map(([currency, rate], index) => (
              <tr key={index}>
                <td>{currency}</td>
                <td>
                  <Link
                    to={`/chart-page?base=${this.props.baseCurrency}&quote=${currency}`}
                  >
                    {rate}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CurrencyTable;
