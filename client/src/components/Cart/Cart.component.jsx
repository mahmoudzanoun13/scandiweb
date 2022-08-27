import { Component } from "react";
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
              <div className="container-c-c" key={attribute.name}>
                <p className="section-title-c-c">{attribute.name}:</p>
                {attribute.items?.map((item, i) => (
                  <div className="container-c-c" key={i} style={{ display: "inline-block" }}>
                    {attribute.name === "Color" ? (
                      <div className="colors-c-c">
                        <div
                          className={`color-c-c ${selectedAttributes[attribute.name] === item.value ? 'selectedColor-c-c' : null}`}
                          style={{background: item.value}}
                        />
                      </div>
                    ) : (
                      <div
                        className={`capacity-c-c ${selectedAttributes[attribute.name] === item.value ? 'selected-c-c' : null}`}
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
            <button onClick={() => incrementQuantity(id, selectedAttributes)} className="button-c-c">+</button>
            <p className="items-c-c">{quantity}</p>
            <button onClick={() => decrementQuantity(id, selectedAttributes)} className="button-c-c">-</button>
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

export default Cart;
