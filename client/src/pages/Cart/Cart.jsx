import { Component } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import './Cart.css';

export class Cart extends Component {
  state = {
    totalTax: 0,
  };

  componentDidMount() {
    this.getTotalTax();
    this.props.getTotalQuantity();
    this.props.getTotalPrice();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
      this.componentDidMount();
    }
  }

  getTotalTax = () => {
    let sum = 0;
    this.setState({ totalTax: sum });
    this.props.cartItems?.forEach((item) => {
      const productPrice = item.prices.find((price) => {
        return price.currency.symbol === this.props.currency;
      });
      sum += productPrice.amount * item.quantity * 0.21;
      this.setState({ totalTax: sum.toFixed(2) });
    });
  };

  render() {
    const {
      cartItems,
      currency,
      totalQuantity,
      totalPrice,
      incrementQuantity,
      decrementQuantity,
      completedProcess,
    } = this.props;
    const { totalTax } = this.state;
    return (
      <div className="cart-container">
        <div className="wrapper">
          <h1 className="headline">cart</h1>
          <div className="horizontal-line" />
          {cartItems.map((product, i) => (
            <div className="container" key={i}>
              <div className="product">
                <div className="left">
                  <h1 className="title">{product.name}</h1>
                  <p className="category">{product.brand}</p>
                  {product.prices?.map((price) => {
                    let symbol = price.currency.symbol;
                    return symbol === currency ? (
                      <p className="price" key={symbol}>
                        {currency} {price.amount}
                      </p>
                    ) : null;
                  })}
                  {product.attributes?.map((attribute) => (
                    <div className="container" key={attribute.name}>
                      {attribute.items?.map((item, i) => (
                        <div className="container" key={i} style={{ display: "inline-block" }}>
                          {attribute.name === "Color" ? (
                            <div className="colors">
                              <div
                                className={`color ${product.selectedAttributes[attribute.name] === item.value ? 'selectedColor' : null}`}
                                style={{background: item.value}}
                              />
                            </div>
                          ) : (
                            <div
                              className={`capacity ${product.selectedAttributes[attribute.name] === item.value ? 'selected' : null}`}
                            >
                              {item.value}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="right">
                  <div>
                    <div className="controls">
                      <button onClick={() => incrementQuantity(product.id, product.selectedAttributes)} className="button">
                        +
                      </button>
                      <p className="items">{product.quantity}</p>
                      <button onClick={() => decrementQuantity(product.id, product.selectedAttributes)} className="button">
                        -
                      </button>
                    </div>
                  </div>
                  <Carousel images={product.gallery} />
                </div>
              </div>
              <div className="horizontal-line" />
            </div>
          ))}
          <div className="bottom-wrapper">
            <p className="tax">Tax 21%:</p>
            <p className="price">
              {currency} {totalTax}
            </p>
          </div>
          <div className="bottom-wrapper">
            <p className="quantity">Quantity:</p>
            <p className="price">{totalQuantity}</p>
          </div>
          <div className="bottom-wrapper">
            <p className="total">Total:</p>
            <p className="price">
              {currency} {totalPrice}
            </p>
          </div>
          <button className="order" onClick={() => completedProcess()}>
            <p className="label">order</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
