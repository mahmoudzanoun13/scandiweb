import { Component } from "react";
import { 
  ActiveImage, 
  Category, 
  Container, 
  Content, 
  GroupImages, 
  Image, 
  ImageWrapper, 
  SectionTitle, 
  Title, 
  Wrapper, 
  Colors, 
  Color, 
  Price, 
  AddToCart,  
  Capacity
} from "./ProductDetails.styled";
import withParams from "../../withParams/withParams";
import { detailsProductQuery } from "../../GraphQL/queries";
import { client } from "../../index";
import parse from "html-react-parser";
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
      <Container>
        <Wrapper>
          <GroupImages>
            {gallery?.map((item, i) => (
              <ImageWrapper key={i}>
                <Image
                  onClick={() => this.setIndex(i)}
                  src={item}
                  alt="product_image"
                />
              </ImageWrapper>
            ))}
          </GroupImages>
          <ActiveImage>
            <Image src={banner[index]} alt="product_image" specifyHeight />
          </ActiveImage>
          <Content>
            <Title>{brand}</Title>
            <Category>{name}</Category>
            {attributes?.map((attribute) => (
              <Container key={attribute.id}>
                <SectionTitle>{attribute.name}:</SectionTitle>
                {attribute.items?.map((item, i) => (
                  <Container key={i} style={{ display: "inline-block" }}>
                    {attribute.id === "Color" ? (
                      <Colors>
                        <Color
                          onClick={() =>
                            this.getAttributes(attribute.id, item.value)
                          }
                          className={`${selectedAttributes[attribute.id] === item.value ? 'selectedColor' : null}`}
                          value={item.value}
                        />
                      </Colors>
                    ) : (
                      <Capacity
                        onClick={() =>
                          this.getAttributes(attribute.id, item.value)
                        }
                        className={`${selectedAttributes[attribute.id] === item.value ? 'selected' : null}`}
                      >
                        {item.value}
                      </Capacity>
                    )}
                  </Container>
                ))}
              </Container>
            ))}
            <SectionTitle>PRICE:</SectionTitle>
            {productDetails.prices?.map((price) => {
              let symbol = price.currency.symbol;
              return symbol === currency ? (
                <Price key={symbol}>
                  {currency} {price.amount}
                </Price>
              ) : null;
            })}
            <AddToCart
              onClick={() =>
                handleAddToCart(productDetails, selectedAttributes, attributes?.length)
              }
            >
              {
                inStock ? 'ADD TO CART' : 'OUT OF STOCK'
              }
            </AddToCart>
            {parse(`${description}`)}
          </Content>
        </Wrapper>
      </Container>
    );
  }
}

export default withParams(ProductDetails);
