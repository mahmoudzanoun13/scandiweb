import { Component } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import cart from '../../assets/images/Empty Cart.png';
import { client } from "../..";
import { productsQuery } from "../../GraphQL/queries";
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
          <div key={product.id} className="cart-wrapper-p">
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
                <div onClick={() => handleAddToCart(product)} className="cart-icon-p">
                  <img className="cart-p" src={cart} alt="empty_cart" />
                </div>
              : <div className="out-of-stock-p">OUT OF STOCK</div>
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
