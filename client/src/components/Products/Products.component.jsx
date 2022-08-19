import { Component } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import cart from '../../assets/images/Empty Cart.png';
import { client } from "../..";
import { productsQuery } from "../../GraphQL/queries";
import styled from "styled-components";
import './Products.css';

export class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    client
      .query({
        query: productsQuery,
        variables: { title: this.props.chosenCategory },
      })
      .then((result) => {
        const { data } = result;
        this.setState({ products: data.category.products });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.chosenCategory !== prevProps.chosenCategory) {
      this.componentDidMount();
    }
  }

  render() {
    const { products } = this.state;
    const { handleAddToCart, currency } = this.props;
    return (
      <div className="container-p">
        {products.map((product) => (
          <ProductCardWrapper key={product.id}>
            <Link to={`/details/${product.id}`}>
              <div onClick={() => <ProductDetails id={product.id} />}>
                <div className="wrapper-p">
                  <div className="wrapper-p">
                    <img className="image-p" src={product.gallery[0]} alt="product_photo" />
                  </div>
                  <div className="content-p">
                    <p className="content-title-p">{product.brand} {product.name}</p>
                    {
                      product.prices.map((price) => {
                        let symbol = price.currency.symbol;
                        return symbol === currency ? <p className="content-price-p" key={symbol}>{currency} {price.amount}</p> : null;
                      })
                    }
                  </div>
                </div>
              </div>
            </Link>
            {
              product.inStock ?
                <EmptyCart onClick={() => handleAddToCart(product)}>
                  <img className="cart-p" src={cart} alt="empty_cart" />
                </EmptyCart>
              : <div className="out-of-stock-p">OUT OF STOCK</div>
            }
          </ProductCardWrapper>
        ))}
      </div>
    );
  }
}

const EmptyCart = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #52d67a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 85px;
  opacity: 0;
  transition: .4s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
`;

const ProductCardWrapper = styled.div`
  width: 315px;
  height: 365px;
  padding: 10px;
  position: relative;
  transition: .4s ease-in-out;
  &:hover {
    background: #FFF;
    cursor: pointer;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover ${EmptyCart} {
    opacity: 1;
  }
`;

export default Products;
