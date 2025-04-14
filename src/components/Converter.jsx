import React from "react";
import ExchangeIcon from "../assets/right-left-solid.svg";
import "../css/Converter.css";

import { checkStatus } from "../utils/checkStatus";
import { json } from "../utils/checkStatus";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      baseRate: {
        code: "",
        amount: "",
      },
      secondaryRate: {
        code: "",
        amount: "",
        defaultRate: "",
      },
      lastEdited: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
    this.fetchBase = this.fetchBase.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies(); // fetches most recent rates
  }

  fetchCurrencies() {
    fetch("https://api.frankfurter.dev/v1/currencies")
      .then(checkStatus)
      .then(json)
      .then((response) => {
        let entries = Object.entries(response);
        this.setState(
          {
            currencies: entries,
            baseRate: { code: entries[9][0], amount: "" },
            secondaryRate: {
              code: entries[29][0],
              amount: "",
              defaultRate: "",
            },
          },
          this.fetchBase
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;

    if (name === "firstSelect") {
      this.setState(
        {
          baseRate: {
            code: value,
            amount: this.state.baseRate.amount,
          },
        },
        () => {
          this.props.onBaseChange(value);
        }
      );
    } else if (name === "secondSelect") {
      this.setState({
        secondaryRate: {
          code: value,
          amount: this.state.secondaryRate.amount,
        },
      });
    }
  }

  handleNumChange(event) {
    const { classList, value } = event.target;

    if (classList.contains("firstInput")) {
      const currentCode = this.state.baseRate.code;

      this.setState({
        baseRate: {
          code: currentCode,
          amount: value,
        },
        lastEdited: "first",
      });
    } else if (classList.contains("secondInput")) {
      const currentCode = this.state.secondaryRate.code;

      this.setState({
        secondaryRate: {
          code: currentCode,
          amount: value,
        },
        lastEdited: "second",
      });
    }
  }

  fetchBase() {
    const { baseRate, secondaryRate } = this.state;
    const baseCode = baseRate.code;
    const secondCode = secondaryRate.code;
    const baseAmount = 1.0;

    fetch(
      `https://api.frankfurter.app/latest?amount=${baseAmount}&from=${baseCode}&to=${secondCode}`
    )
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({
          secondaryRate: {
            code: this.state.secondaryRate.code,
            amount: this.state.secondaryRate.amount,
            defaultRate: Object.values(response.rates)[0],
          },
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    const baseCode = this.state.baseRate.code;
    const secondCode = this.state.secondaryRate.code;
    const baseAmount = this.state.baseRate.amount;
    const secondAmount = this.state.secondaryRate.amount;

    if (
      !baseAmount ||
      (baseAmount === "0" && !secondAmount) ||
      secondAmount === "0"
    ) {
      return alert("Please put in a valid number to convert 😊");
    }

    if (this.state.lastEdited === "first") {
      fetch(
        `https://api.frankfurter.app/latest?amount=${baseAmount}&from=${baseCode}&to=${secondCode}`
      )
        .then(checkStatus)
        .then(json)
        .then((response) => {
          this.setState(
            {
              secondaryRate: {
                code: this.state.secondaryRate.code,
                amount: Object.values(response.rates)[0],
                defaultRate: this.state.secondaryRate.defaultRate,
              },
            },
            this.fetchBase
          );
        });
    } else {
      fetch(
        `https://api.frankfurter.app/latest?amount=${secondAmount}&from=${secondCode}&to=${baseCode}`
      )
        .then(checkStatus)
        .then(json)
        .then((response) => {
          this.setState(
            {
              baseRate: {
                code: this.state.baseRate.code,
                amount: Object.values(response.rates)[0],
              },
            },
            this.fetchBase
          );
        });
    }
  }

  render() {
    return (
      <div className="converterBackground row p-4">
        <div className="col-12">
          <form
            className="row align-items-center justify-content-center"
            onSubmit={this.handleSubmit}
          >
            <div className="col-12 col-lg-5">
              <label className="mb-2">Amount</label>
              <div className="baseInput">
                <select
                  name="firstSelect"
                  id="firstSelect"
                  className="firstSelect"
                  value={this.state.baseRate.code || ""}
                  onChange={this.handleChange}
                >
                  {this.state.currencies.length > 0 ? (
                    this.state.currencies.map(([code, name]) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))
                  ) : (
                    <option>Loading...</option>
                  )}
                </select>
                <input
                  type="number"
                  className="firstInput"
                  value={this.state.baseRate.amount || ""}
                  onChange={this.handleNumChange}
                />
              </div>
            </div>
            <div className="col-12 col-lg-2 text-center mt-3">
              <img
                src={ExchangeIcon}
                className="exchangeIcon"
                alt="two arrows one going left the other going right"
              />
            </div>
            <div className="col-12 col-lg-5">
              <label className="mb-2">Converted to</label>
              <div className="baseInput">
                <select
                  name="secondSelect"
                  id="secondSelect"
                  className="secondSelect"
                  value={this.state.secondaryRate.code || ""}
                  onChange={this.handleChange}
                >
                  {this.state.currencies.length > 0 ? (
                    this.state.currencies.map(([code, name]) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))
                  ) : (
                    <option>Loading...</option>
                  )}
                </select>
                <input
                  type="number"
                  className="secondInput"
                  value={this.state.secondaryRate.amount}
                  onChange={this.handleNumChange}
                />
              </div>
            </div>
            <div className="d-md-flex justify-content-between mt-5 align-items-center text-center">
              <h4 className="mb-4 mb-lg-0">
                1.0000 {this.state.baseRate.code} ={" "}
                <span className="highLight">
                  {this.state.secondaryRate.defaultRate}
                </span>{" "}
                {this.state.secondaryRate.code}
              </h4>
              <input
                type="submit"
                value="Convert"
                className="main-button convert-btn"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Converter;
