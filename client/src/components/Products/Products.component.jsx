import { Component } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import { 
  Cart, 
  Container, 
  Content, 
  ContentPrice, 
  ContentTitle, 
  EmptyCart, 
  Image, 
  OutOfStock, 
  ProductCard, 
  ProductCardWrapper, 
  Wrapper } from "./Products.styled";
import cart from '../../assets/images/Empty Cart.png';
import { client } from "../..";
import { productsQuery } from "../../GraphQL/queries";

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
      <Container>
        {products.map((product) => (
          <ProductCardWrapper key={product.id}>
            <Link to={`/details/${product.id}`}>
              <ProductCard onClick={() => <ProductDetails id={product.id} />}>
                <Wrapper>
                  <Wrapper>
                    <Image src={product.gallery[0]} alt="product_photo" />
                  </Wrapper>
                  <Content>
                    <ContentTitle>{product.brand} {product.name}</ContentTitle>
                    {
                      product.prices.map((price) => {
                        let symbol = price.currency.symbol;
                        return symbol === currency ? <ContentPrice key={symbol}>{currency} {price.amount}</ContentPrice> : null;
                      })
                    }
                  </Content>
                </Wrapper>
              </ProductCard>
            </Link>
            {
              product.inStock ?
                <EmptyCart onClick={() => handleAddToCart(product)}>
                  <Cart src={cart} alt="empty_cart" />
                </EmptyCart>
              : <OutOfStock>OUT OF STOCK</OutOfStock>
            }
          </ProductCardWrapper>
        ))}
      </Container>
    );
  }
}

export default Products;
