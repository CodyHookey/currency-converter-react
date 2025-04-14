import React from "react";
import Chart from "chart.js";
import { checkStatus, json } from "../utils/checkStatus";

class ChartPage extends React.Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);

    this.state = {
      baseCurrency: params.get("base") || "GBP",
      quoteCurrency: params.get("quote") || "USD",
    };

    this.chartRef = React.createRef();
  }

  componentDidMount = () => {
    const { baseCurrency, quoteCurrency } = this.state;
    this.getHistoricalRates(baseCurrency, quoteCurrency);
  };

  getHistoricalRates = (base, quote) => {
    const endDate = new Date().toISOString().split("T")[0];
    const startDate = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    fetch(
      `https://api.frankfurter.app/${startDate}..${endDate}?from=${base}&to=${quote}`
    )
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }

        const chartLabels = Object.keys(data.rates);
        const chartData = Object.values(data.rates).map((rate) => rate[quote]);
        const chartLabel = `${base}/${quote}`;
        this.buildChart(chartLabels, chartData, chartLabel);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  buildChart = (labels, data, label) => {
    const chartRef = this.chartRef.current.getContext("2d");
    if (typeof this.chart !== "undefined") {
      this.chart.destroy();
    }
    this.chart = new Chart(this.chartRef.current.getContext("2d"), {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: label,
            data,
            fill: false,
            tension: 0,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default ChartPage;
