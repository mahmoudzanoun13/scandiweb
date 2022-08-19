import { Component } from "react";
import './CurrencySwitcher.css';

export class CurrencySwitcher extends Component {
  render() {
    const { currencies, choseCurrency } = this.props;
    return (
      <section className="section-cs">
        <div className="select-cs">
          {
            currencies.map((currency) => (
              <p className="option-cs" onClick={() => choseCurrency(currency.symbol)} key={currency.label}>{currency.symbol} {currency.label}</p>
            ))
          }
        </div>
      </section>
    );
  }
}

export default CurrencySwitcher;
