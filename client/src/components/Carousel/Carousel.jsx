import React, { Component } from 'react';
import arrowLeft from '../../assets/images/arrow_left.png';
import arrowRight from '../../assets/images/arrow_right.png';
import './Carousel.css';

export class Carousel extends Component {
  state = {
    currentSlide: 0,
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? this.props.images.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === this.props.images.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  render() {
    const { images } = this.props;
    const { currentSlide } = this.state;
    return (
      <div className="container-c">
        <div className="images-c">
          {images.map((image, i) => (
            i === currentSlide && (
              <img className="image-c" key={i} src={image} alt="product_image" />
            )
          ))}
        </div>
        {
          images.length > 1 ?
            <>
              <div className="slide-left" onClick={this.prevSlide}>
                <img src={arrowLeft} alt="slide_left" />
              </div>
              <div className="slide-right" onClick={this.nextSlide}>
                <img src={arrowRight} alt="slide_right" />
              </div>
            </>
          : null
        }
      </div>
    );
  }
}

export default Carousel;
