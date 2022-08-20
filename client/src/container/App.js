import { Component } from "react";
import { Category } from "../pages/Category/Category";
import { NotFound } from "../pages/NotFound/NotFound";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar.component";
import Cart from "../pages/Cart/Cart";

export class App extends Component {
  state = {
    chosenCategory: 'all',
    cartItems: [],
    totalQuantity: 0,
    currency: '$',
    currencySwitcher: false,
    totalPrice: 0,
  }

  componentDidMount() {
    if(localStorage.carts) {
      this.setState({cartItems: JSON.parse(localStorage.carts)});
    }
    if(localStorage.category) {
      this.setState({chosenCategory: JSON.parse(localStorage.category)});
    }
    window.addEventListener('beforeunload', this.handleUpdatedLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUpdatedLocalStorage);
  }

  handleUpdatedLocalStorage = () => {
    localStorage.setItem('carts', JSON.stringify(this.state.cartItems));
    localStorage.setItem('category', JSON.stringify(this.state.chosenCategory));
  }
    
  choseCategory = (name) => {
    this.setState({chosenCategory: name});
  }

  handleAddToCart = (product, selectedAttributes, lengthOfAttributes) => {
    let initialAttributes = {};
    const attributes = product.attributes.map((attribute) => attribute.items);
    const getAttributesId = product.attributes.map((attribute) => attribute.id);
    attributes.map((item, i) => initialAttributes[getAttributesId[i]] = item[0].value);
    let isPresent = this.state.cartItems.findIndex(item => 
      item.id === product.id && JSON.stringify(item.selectedAttributes) === JSON.stringify(selectedAttributes)) !== -1;
    if (isPresent) {
      this.incrementQuantity(product.id, selectedAttributes);
      alert('Added successfully');
    } else {
      if (!selectedAttributes) {
        let isPresent = this.state.cartItems.findIndex(item => 
          item.id === product.id && JSON.stringify(item.selectedAttributes) === JSON.stringify(initialAttributes)) !== -1;
        if (isPresent) {
          this.incrementQuantity(product.id, initialAttributes);
          alert('Added successfully');
        } else {
          this.setState((prevState) => ({
            cartItems: prevState.cartItems.concat({ ...product, quantity: 1, selectedAttributes: initialAttributes }),
          }))
        }
        alert('Added successfully');
      } else {
        if (product.inStock) {
          const lengthOfSelectedAttributes = Object.keys(selectedAttributes).length;
          if (lengthOfSelectedAttributes < lengthOfAttributes) {
            alert('You must select attributes')
          } else {
            this.setState((prevState) => ({
              cartItems: prevState.cartItems.concat({ ...product, quantity: 1, selectedAttributes: selectedAttributes }),
            }))
            alert('Added successfully');
          }
        } else {
          alert('This product is out of stock');
        }
      }
    }
  }

  incrementQuantity = (id, selectedAttributes) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((product) => {
        if (product.id === id && JSON.stringify(product.selectedAttributes) === JSON.stringify(selectedAttributes)) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product;
      })
      return {
        cartItems: updatedCartItems,
      };
    })
  }

  decrementQuantity = (id, selectedAttributes) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((product) => {
        if (product.id === id && JSON.stringify(product.selectedAttributes) === JSON.stringify(selectedAttributes)) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product;
      }).filter((product) => product?.quantity > 0);
      return {
        cartItems: updatedCartItems,
      };
    })
  }

  getTotalQuantity = () => {
    let totalQuantity = 0;
    this.setState({totalQuantity: totalQuantity});
    this.state.cartItems?.forEach((item) => {
      totalQuantity += item.quantity
      this.setState({totalQuantity: totalQuantity})
    })
  }

  handleCurrencies = () => {
    this.setState({currencySwitcher: !this.state.currencySwitcher})
  }

  choseCurrency = (value) => {
    this.setState({currency: value, currencySwitcher: false})
  }

  getTotalPrice = () => {
    let sum = 0;
    this.setState({ totalPrice: sum });
    this.state.cartItems?.forEach((item) => {
      const productPrice = item.prices.find(price => {
        return price.currency.symbol === this.state.currency;
      })
      sum += (productPrice.amount * item.quantity);
      this.setState({ totalPrice: sum.toFixed(2) })
    })
  }

  completedProcess = () => {
    if (this.state.cartItems.length > 0) {
      alert(`Congratulations! You paid: ${this.state.currency} ${this.state.totalPrice}. Your order is on its way...`);
      this.setState({cartItems: []});
    } else {
      alert('Your cart is empty');
    }
  }

  render() {
    const { cartItems, chosenCategory, totalQuantity, currency, currencySwitcher, totalPrice } = this.state;
    return (
      <>
        <NavBar
          choseCategory={this.choseCategory}
          chosenCategory={chosenCategory}
          cartItems={cartItems}
          incrementQuantity={this.incrementQuantity}
          decrementQuantity={this.decrementQuantity}
          getTotalQuantity={this.getTotalQuantity}
          totalQuantity={totalQuantity}
          currency={currency}
          currencySwitcher={currencySwitcher}
          handleCurrencies={this.handleCurrencies}
          choseCurrency={this.choseCurrency}
          totalPrice={totalPrice}
          getTotalPrice={this.getTotalPrice}
          completedProcess={this.completedProcess}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Category
                chosenCategory={chosenCategory}
                handleAddToCart={this.handleAddToCart}
                currency={currency}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <ProductDetails
                handleAddToCart={this.handleAddToCart}
                currency={currency}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                currency={currency}
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
                incrementQuantity={this.incrementQuantity}
                decrementQuantity={this.decrementQuantity}
                getTotalQuantity={this.getTotalQuantity}
                getTotalPrice={this.getTotalPrice}
                completedProcess={this.completedProcess}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
