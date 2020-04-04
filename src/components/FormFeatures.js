import React, { Component } from "react";
import FormInput from "./FormInput";
import slugify from "slugify";
import FormFieldset from "./FormFieldset";

export default class Features extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FormInput
            key={itemHash}
            feature={feature}
            itemHash={itemHash}
            item={item}
            USCurrencyFormat={this.props.USCurrencyFormat}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        );
      });
      return (
        <FormFieldset key={featureHash} feature={feature} options={options} />
      );
    });
    return <>{features}</>;
  }
}
