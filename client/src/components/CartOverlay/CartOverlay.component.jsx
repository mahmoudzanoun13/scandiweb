import React, { Component } from 'react';
import { Bold, Buttons, CheckOut, Container, EmptyCart, ItemQuantity, LeftButton, Price, RightButton, Total, TotalPrice, ViewBag, Wrapper } from './CartOverlay.styled';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart.component';

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
      <Container>
        <Wrapper>
          <ItemQuantity>
            <Bold>My Bag, </Bold>
            {totalQuantity} {totalQuantity > 1 ? "items" : "item"}
          </ItemQuantity>
          {cartItems.length < 1 ? (
            <EmptyCart>Your cart is Empty</EmptyCart>
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
          <TotalPrice>
            <Total>Total</Total>
            <Price>
              {currency} {totalPrice}
            </Price>
          </TotalPrice>
          <Buttons>
            <LeftButton>
              <Link to="/cart">
                <ViewBag>VIEW BAG</ViewBag>
              </Link>
            </LeftButton>
            <RightButton>
              <CheckOut onClick={() => completedProcess()}>CHECK OUT</CheckOut>
            </RightButton>
          </Buttons>
        </Wrapper>
      </Container>
    );
  }
}

export default CartOverlay;
