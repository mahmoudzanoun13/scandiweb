import { Component } from 'react';
import { Products } from '../../components/Products/Products.component';
import './Category.css';

export class Category extends Component {
  render() {
    const { chosenCategory, handleAddToCart, currency } = this.props;
    return (
      <>
        <h1 className="category-title">{chosenCategory}</h1>
        <div>
          <Products
            chosenCategory={chosenCategory}
            handleAddToCart={handleAddToCart}
            currency={currency}
          />
        </div>
      </>
    );
  }
}

export default Category;
