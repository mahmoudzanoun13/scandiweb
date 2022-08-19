import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart.component';
import './CartOverlay.css';

export class CartOverlay extends Component {
  componentDidMount() {
    this.props.getTotalPrice();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
      this.componentDidMount();
    }
  }

  render() {
    const {
      cartItems,
      decrementQuantity,
      incrementQuantity,
      totalQuantity,
      currency,
      totalPrice,
      completedProcess,
    } = this.props;
    return (
      <div className="container-co">
        <div className="wrapper-co">
          <h2 className="item-quantity-co">
            <strong className="bold-co">My Bag, </strong>
            {totalQuantity} {totalQuantity > 1 ? "items" : "item"}
          </h2>
          {cartItems.length < 1 ? (
            <div className="empty-cart-co">Your cart is Empty</div>
          ) : null}
          {cartItems.map((item, i) => (
            <Cart
              key={i}
              {...item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              currency={currency}
            />
          ))}
          <div className="total-price-co">
            <p className="total-co">Total</p>
            <p className="price-co">
              {currency} {totalPrice}
            </p>
          </div>
          <div className="buttons-co">
            <div className="left-button-co">
              <Link to="/cart">
                <button className="view-bag-co">VIEW BAG</button>
              </Link>
            </div>
            <div className="right-button-co">
              <button className="check-out-co" onClick={() => completedProcess()}>CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartOverlay;
