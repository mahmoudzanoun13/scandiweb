import { Component } from "react";
import icon from "../../assets/images/a-logo.png";
import arrowDown from "../../assets/images/arrow_down.png";
import arrowUp from "../../assets/images/arrow_up.png";
import cart from "../../assets/images/Empty Cart.png";
import {
  Container,
  Header,
  Wrapper,
  Brand,
  Navigation,
  List,
  Item,
  Controls,
  Icon,
  CardCounter,
  OverLay,
  Currency,
  OverLaySwitcher,
} from "./NavBar.styled";
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
      <Container>
        <Header>
          <Wrapper>
            <Brand src={icon} alt="logo_icon"></Brand>
          </Wrapper>
          <Navigation>
            {categories.map((categorie) => (
              <List key={categorie.name}>
                <Item>
                  <Link
                    onClick={() => choseCategory(categorie.name)}
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "#1D1F22",
                      textTransform: "uppercase",
                    }}
                    className={`${
                      categorie.name === chosenCategory ? "active" : null
                    }`}
                  >
                    {categorie.name}
                  </Link>
                </Item>
              </List>
            ))}
          </Navigation>
          <Controls>
            <Wrapper flex>
              <Currency>{currency}</Currency>
              {currencySwitcher ? (
                <CurrencySwitcher
                  currencies={currencies}
                  choseCurrency={choseCurrency}
                />
              ) : null}
              <Icon
                onClick={handleCurrencies}
                src={currencySwitcher ? arrowUp : arrowDown}
                alt="dollar_icon"
              />
              <Wrapper>
                <Icon
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
                <CardCounter>{totalQuantity}</CardCounter>
              </Wrapper>
            </Wrapper>
          </Controls>
        </Header>
        <OverLay
          onClick={() => this.handleClick()}
          value={displayCart ? "block" : "none"}
        />
        <OverLaySwitcher
          onClick={() => handleCurrencies()}
          value={currencySwitcher ? "block" : "none"}
        />
      </Container>
    );
  }
}

export default NavBar;
