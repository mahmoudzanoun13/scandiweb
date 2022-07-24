import { Component } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import {
  BottomWrapper,
  Button,
  Capacity,
  Category,
  Color,
  Colors,
  Container,
  Controls,
  ControlsWrapper,
  DeleteItem,
  Headline,
  HorizontalLine,
  Items,
  Label,
  Left,
  Order,
  Price,
  Product,
  Quantity,
  Right,
  Tax,
  Title,
  Total,
  Wrapper
} from "./Cart.styled";

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
      deleteItem,
      completedProcess,
    } = this.props;
    const { totalTax } = this.state;
    return (
      <Container>
        <Wrapper>
          <Headline>cart</Headline>
          <HorizontalLine />
          {cartItems.map((product) => (
            <Container key={product.id}>
              <Product>
                <Left>
                  <Title>{product.name}</Title>
                  <Category>{product.brand}</Category>
                  {product.prices?.map((price) => {
                    let symbol = price.currency.symbol;
                    return symbol === currency ? (
                      <Price key={symbol}>
                        {currency} {price.amount}
                      </Price>
                    ) : null;
                  })}
                  {product.attributes?.map((attribute) => (
                    <Container key={attribute.id}>
                      {attribute.items?.map((item, i) => (
                        <Container key={i} style={{ display: "inline-block" }}>
                          {attribute.id === "Color" ? (
                            <Colors>
                              <Color
                                className={`${product.selectedAttributes[attribute.id] === item.value ? 'selectedColor' : null}`}
                                value={item.value}
                              />
                            </Colors>
                          ) : (
                            <Capacity
                              className={`${product.selectedAttributes[attribute.id] === item.value ? 'selected' : null}`}
                            >
                              {item.value}
                            </Capacity>
                          )}
                        </Container>
                      ))}
                    </Container>
                  ))}
                </Left>
                <Right>
                  <ControlsWrapper>
                    <Controls>
                      <Button onClick={() => incrementQuantity(product.id)}>
                        +
                      </Button>
                      <Items>{product.quantity}</Items>
                      <Button onClick={() => decrementQuantity(product.id)}>
                        -
                      </Button>
                    </Controls>
                  </ControlsWrapper>
                  <Carousel images={product.gallery} />
                </Right>
              </Product>
              <DeleteItem onClick={() => deleteItem(product.id)}>x</DeleteItem>
              <HorizontalLine />
            </Container>
          ))}
          <BottomWrapper>
            <Tax>Tax 21%:</Tax>
            <Price>
              {currency} {totalTax}
            </Price>
          </BottomWrapper>
          <BottomWrapper>
            <Quantity>Quantity:</Quantity>
            <Price>{totalQuantity}</Price>
          </BottomWrapper>
          <BottomWrapper>
            <Total>Total:</Total>
            <Price>
              {currency} {totalPrice}
            </Price>
          </BottomWrapper>
          <Order onClick={() => completedProcess()}>
            <Label>order</Label>
          </Order>
        </Wrapper>
      </Container>
    );
  }
}

export default Cart;
