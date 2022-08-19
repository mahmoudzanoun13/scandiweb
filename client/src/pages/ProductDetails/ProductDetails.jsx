import { Component } from "react";
import withParams from "../../withParams/withParams";
import { detailsProductQuery } from "../../GraphQL/queries";
import { client } from "../../index";
import parse from "html-react-parser";
import styled from "styled-components";
import './ProductDetails.css';

export class ProductDetails extends Component {

  state = {
    productDetails: {},
    banner: '',
    index: 0,
    selectedAttributes: {},
  }

  componentDidMount() {
    const { id } = this.props.params;

    client
      .query({ query: detailsProductQuery, variables: { id: id } })
      .then((result) => {
        const { data } = result;
        this.setState({productDetails: data.product});
        this.setState({banner: data.product.gallery});
      });
  }

  setIndex(index) {
    this.setState({index: index});
  }
  
  getAttributes(proprty, value) {
    this.setState({selectedAttributes: { ...this.state.selectedAttributes, [proprty]: value } });
  }

  render() {
    const { banner, productDetails, index, selectedAttributes } = this.state;
    const {
      attributes,
      brand,
      description,
      gallery,
      name,
      inStock,
    } = productDetails;
    const { handleAddToCart, currency } = this.props;
    return (
      <>
        <div className="wrapper-pd">
          <div className="group-images">
            {gallery?.map((item, i) => (
              <div className="image-wrapper" key={i}>
                <img className="image-pd"
                  onClick={() => this.setIndex(i)}
                  src={item}
                  alt="product_image"
                />
              </div>
            ))}
          </div>
          <div className="active-image-wrapper">
            <img className="image-pd-active" src={banner[index]} alt="product_image" />
          </div>
          <div className="content-pd">
            <h1 className="title-pd">{brand}</h1>
            <p className="category-pd">{name}</p>
            {attributes?.map((attribute) => (
              <div key={attribute.id}>
                <p className="section-title-pd">{attribute.name}:</p>
                {attribute.items?.map((item, i) => (
                  <div key={i} style={{ display: "inline-block" }}>
                    {attribute.id === "Color" ? (
                      <div className="colors-pd">
                        <Color
                          onClick={() =>
                            this.getAttributes(attribute.id, item.value)
                          }
                          className={`${selectedAttributes[attribute.id] === item.value ? 'selectedColor' : null}`}
                          value={item.value}
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          this.getAttributes(attribute.id, item.value)
                        }
                        className={`capacity-pd ${selectedAttributes[attribute.id] === item.value ? 'selected' : null}`}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
            <p className="section-title-pd">PRICE:</p>
            {productDetails.prices?.map((price) => {
              let symbol = price.currency.symbol;
              return symbol === currency ? (
                <p className="price-pd" key={symbol}>
                  {currency} {price.amount}
                </p>
              ) : null;
            })}
            <div
              className="add-to-cart-pd"
              onClick={() =>
                handleAddToCart(productDetails, selectedAttributes, attributes?.length)
              }
            >
              {
                inStock ? 'ADD TO CART' : 'OUT OF STOCK'
              }
            </div>
            {parse(`${description}`)}
          </div>
        </div>
      </>
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

export default withParams(ProductDetails);
