import React, { Component } from "react";
import FormFeatures from "./FormFeatures";

export default class Form extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FormFeatures
          USCurrencyFormat={this.props.USCurrencyFormat}
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </form>
    );
  }
}
