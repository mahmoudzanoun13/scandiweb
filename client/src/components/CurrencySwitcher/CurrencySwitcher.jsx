import { Component } from "react";
import { Option, Section, Select } from "./CurrencySwitcher.styled";

export class CurrencySwitcher extends Component {
  render() {
    const { currencies, choseCurrency } = this.props;
    return (
      <Section>
        <Select>
          {
            currencies.map((currency) => (
              <Option onClick={() => choseCurrency(currency.symbol)} key={currency.label}>{currency.symbol} {currency.label}</Option>
            ))
          }
        </Select>
      </Section>
    );
  }
}

export default CurrencySwitcher;
