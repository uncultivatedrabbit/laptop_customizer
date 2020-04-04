import React, { Component } from "react";
import SummaryOption from "./SummaryOption";

export default class Summary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];
      return (
        <SummaryOption
          featureHash={featureHash}
          selectedOption={selectedOption}
          USCurrencyFormat={this.props.USCurrencyFormat}
          key={featureHash}
        />
      );
    });
    return <>{summary}</>;
  }
}
