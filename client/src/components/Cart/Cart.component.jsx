import { Component } from "react";
import {
  Button,
  Capacity,
  Center,
  Color,
  Colors,
  Container,
  Content,
  DeleteItem,
  Image,
  Items,
  Left,
  Price,
  Right,
  SectionTitle,
  Title,
  Wrapper,
} from "./Cart.styled";

export class Cart extends Component {
  render() {
    const {
      attributes,
      brand,
      decrementQuantity,
      deleteItem,
      id,
      incrementQuantity,
      name,
      quantity,
      prices,
      currency,
      gallery,
      selectedAttributes } = this.props;
    return (
      <Container>
        <Content>
          <Left>
            <Title>{name}</Title>
            <Title>{brand}</Title>
            {prices?.map((price) => {
              let symbol = price.currency.symbol;
              return symbol === currency ? (
                <Price key={symbol}>{currency} {price.amount}</Price>
              ) : null;
            })}
            {attributes?.map((attribute) => (
              <Container key={attribute.id}>
                <SectionTitle>{attribute.name}:</SectionTitle>
                {attribute.items?.map((item, i) => (
                  <Container key={i} style={{ display: "inline-block" }}>
                    {attribute.id === "Color" ? (
                      <Colors>
                        <Color
                          className={`${selectedAttributes[attribute.id] === item.value ? 'selectedColor' : null}`}
                          value={item.value}
                        />
                      </Colors>
                    ) : (
                      <Capacity
                        className={`${selectedAttributes[attribute.id] === item.value ? 'selected' : null}`}
                      >
                        {item.value}
                      </Capacity>
                    )}
                  </Container>
                ))}
              </Container>
            ))}
          </Left>
          <Center>
            <Button onClick={() => incrementQuantity(id, selectedAttributes)}>+</Button>
            <Items>{quantity}</Items>
            <Button onClick={() => decrementQuantity(id)}>-</Button>
          </Center>
          <Right>
            <Wrapper>
              <Image src={gallery[0]} alt="product_image" />
            </Wrapper>
          </Right>
        </Content>
        <DeleteItem onClick={() => deleteItem(id)}>x</DeleteItem>
      </Container>
    );
  }
}

export default Cart;
