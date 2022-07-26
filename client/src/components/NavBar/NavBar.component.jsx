import { Component } from "react";
import icon from "../../assets/images/a-logo.png";
import arrowDown from "../../assets/images/arrow_down.png";
import arrowUp from "../../assets/images/arrow_up.png";
import cart from "../../assets/images/Empty Cart.png";
import { categoriesQuery, currenciesQuery } from "../../GraphQL/queries";
import { CartOverlay } from "../CartOverlay/CartOverlay.component";
import { client } from "../..";
import { Link } from "react-router-dom";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import './NavBar.css';

export class NavBar extends Component {
  state = {
    displayCart: false,
    categories: [],
    currencies: [],
  };

  componentDidMount() {
    client.query({ query: categoriesQuery }).then((result) => {
      const { data } = result;
      this.setState({ categories: data.categories });
    });

    client.query({ query: currenciesQuery }).then((result) => {
      const { data } = result;
      this.setState({ currencies: data.currencies });
    });
  }

  handleClick() {
    this.setState({ displayCart: !this.state.displayCart });
  }

  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
      this.props.getTotalQuantity();
    }
  }

  render() {
    const { categories, displayCart, currencies } = this.state;
    const {
      cartItems,
      choseCategory,
      chosenCategory,
      decrementQuantity,
      incrementQuantity,
      totalQuantity,
      currency,
      currencySwitcher,
      handleCurrencies,
      choseCurrency,
      totalPrice,
      getTotalPrice,
      completedProcess,
    } = this.props;
    return (
      <div className="container-nb">
        <header className="header-nb">
          <div className="wrapper-nb">
            <img className="brand-nb" src={icon} alt="logo_icon"></img>
          </div>
          <nav className="navigation-nb">
            {categories.map((categorie) => (
              <ul key={categorie.name}>
                <li className="item-nb">
                  <Link
                    onClick={() => choseCategory(categorie.name)}
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: categorie.name === chosenCategory ? "#52d67a" : "#1D1F22",
                      textTransform: "uppercase",
                    }}
                    className={`${
                      categorie.name === chosenCategory ? "active" : null
                    }`}
                  >
                    {categorie.name}
                  </Link>
                </li>
              </ul>
            ))}
          </nav>
          <div className="controls-nb">
            <div className="controls-wrapper-nb">
              <h3 className="currency-nb">{currency}</h3>
              {currencySwitcher ? (
                <CurrencySwitcher
                  currencies={currencies}
                  choseCurrency={choseCurrency}
                />
              ) : null}
              <img
                className="icon-nb"
                onClick={handleCurrencies}
                src={currencySwitcher ? arrowUp : arrowDown}
                alt="dollar_icon"
              />
              <div className="wrapper-nb">
                <img
                  className="icon-nb"
                  onClick={() => this.handleClick()}
                  src={cart}
                  alt="cart_icon"
                />
                {displayCart ? (
                  <CartOverlay
                    cartItems={cartItems}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    totalQuantity={totalQuantity}
                    currency={currency}
                    totalPrice={totalPrice}
                    getTotalPrice={getTotalPrice}
                    completedProcess={completedProcess}
                  />
                ) : null}
                <div className="card-counter-nb">{totalQuantity}</div>
              </div>
            </div>
          </div>
        </header>
        <div
          onClick={() => this.handleClick()}
          className="overlay-nb"
          style={{display: displayCart ? "block" : "none"}}
        />
        <div
          onClick={() => handleCurrencies()}
          className="overlay-switcher-nb"
          style={{display: currencySwitcher ? "block" : "none"}}
        />
      </div>
    );
  }
}

export default NavBar;
