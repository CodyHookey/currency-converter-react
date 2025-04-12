import React from "react";

import Converter from "../components/Converter";
import SalesIcons from "../components/SalesIcons";
import CurrencyTable from "../components/CurrencyTable";
import InfoTabs from "../components/InfoTabs";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: "GBP",
    };

    this.handleBaseChange = this.handleBaseChange.bind(this);
  }

  handleBaseChange(newBase) {
    this.setState({ baseCurrency: newBase });
  }

  render() {
    return (
      <>
        <div className="heroBackground mb-5 py-5">
          <div className="container">
            <div className="text-center mb-4">
              <h1 className="homeH1">Swap Fast, Reach Far</h1>
              <h2 className="homeH2">
                Instant currency conversion for a connected world.
              </h2>
            </div>
            <Converter
              baseCurrency={this.state.baseCurrency}
              onBaseChange={this.handleBaseChange}
            />
          </div>
        </div>
        <div className="container">
          <SalesIcons />
          <CurrencyTable baseCurrency={this.state.baseCurrency} />
          <InfoTabs />
        </div>
      </>
    );
  }
}

export default Home;
