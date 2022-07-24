import { Component } from 'react';
import { Products } from '../../components/Products/Products.component';
import { Container, Title, Wrapper } from './Category.styled';

export class Category extends Component {
  render() {
    const { chosenCategory, handleAddToCart, currency } = this.props;
    return (
      <Container>
        <Title>{chosenCategory}</Title>
        <Wrapper>
          <Products
            chosenCategory={chosenCategory}
            handleAddToCart={handleAddToCart}
            currency={currency}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default Category;
