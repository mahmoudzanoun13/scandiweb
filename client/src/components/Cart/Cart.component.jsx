import { Component } from "react";
import styled from "styled-components";
import './Cart.css'

export class Cart extends Component {
  render() {
    const {
      attributes,
      brand,
      decrementQuantity,
      id,
      incrementQuantity,
      name,
      quantity,
      prices,
      currency,
      gallery,
      selectedAttributes } = this.props;
    return (
      <div className="container-c-c">
        <div className="content-c-c">
          <div className="left-c-c">
            <p className="title-c-c">{name}</p>
            <p className="title-c-c">{brand}</p>
            {prices?.map((price) => {
              let symbol = price.currency.symbol;
              return symbol === currency ? (
                <p className="price-c-c" key={symbol}>{currency} {price.amount}</p>
              ) : null;
            })}
            {attributes?.map((attribute) => (
              <div className="container-c-c" key={attribute.id}>
                <p className="section-title-c-c">{attribute.name}:</p>
                {attribute.items?.map((item, i) => (
                  <div className="container-c-c" key={i} style={{ display: "inline-block" }}>
                    {attribute.id === "Color" ? (
                      <div className="colors-c-c">
                        <Color
                          className={`${selectedAttributes[attribute.id] === item.value ? 'selectedColor' : null}`}
                          value={item.value}
                        />
                      </div>
                    ) : (
                      <div
                        className={`capacity-c-c ${selectedAttributes[attribute.id] === item.value ? 'selected' : null}`}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="center-c-c">
            <Button onClick={() => incrementQuantity(id, selectedAttributes)}>+</Button>
            <p className="items-c-c">{quantity}</p>
            <Button onClick={() => decrementQuantity(id)}>-</Button>
          </div>
          <div className="right-c-c">
            <div className="wrapper-c-c">
              <img className="image-c-c" src={gallery[0]} alt="product_image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Color = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  background: ${props => props.value ? props.value : null};
  outline: 1px solid #1D1F22;
  &:hover {
    cursor: default;
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
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default Cart;
