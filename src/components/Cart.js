import React, { Component } from "react";
import Summary from "./Summary";
import Total from "./Total";

export default class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary
          USCurrencyFormat={this.props.USCurrencyFormat}
          selected={this.props.selected}
        />
        <Total
          USCurrencyFormat={this.props.USCurrencyFormat}
          selected={this.props.selected}
        />
      </section>
    );
  }
}
