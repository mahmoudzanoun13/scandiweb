import { Component } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import styled from "styled-components";
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
          {cartItems.map((product) => (
            <div className="container" key={product.id}>
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
                    <div className="container" key={attribute.id}>
                      {attribute.items?.map((item, i) => (
                        <div className="container" key={i} style={{ display: "inline-block" }}>
                          {attribute.id === "Color" ? (
                            <div className="colors">
                              <Color
                                className={`${product.selectedAttributes[attribute.id] === item.value ? 'selectedColor' : null}`}
                                value={item.value}
                              />
                            </div>
                          ) : (
                            <Capacity
                              className={`${product.selectedAttributes[attribute.id] === item.value ? 'selected' : null}`}
                            >
                              {item.value}
                            </Capacity>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="right">
                  <div>
                    <div className="controls">
                      <Button onClick={() => incrementQuantity(product.id, product.selectedAttributes)}>
                        +
                      </Button>
                      <p className="items">{product.quantity}</p>
                      <Button onClick={() => decrementQuantity(product.id, product.selectedAttributes)}>
                        -
                      </Button>
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

const Color = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  background: ${props => props.value ? props.value : null};
  transition: .4s ease-in-out;
  transform: scale(1);
  outline: 1px solid #1D1F22;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Capacity = styled.div`
  min-width: 32px;
  height: 32px;
  margin-right: 10px;
  margin-top: 10px;
  background: ${props => props.active ? '#2B2B2B' : '#FFF'};
  transition: .4s ease-in-out;
  transform: scale(1);
  outline: 1px solid #1D1F22;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Button = styled.p`
  width: 20px;
  height: 20px;
  background: ${props => props.value ? props.value : null};
  transition: .4s ease-in-out;
  transform: scale(1);
  border: 1px solid #2B2B2B;
  text-align: center;
  line-height: 16px;
  margin: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default Cart;
