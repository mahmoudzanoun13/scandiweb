import React, { Component } from 'react';
import { Arrow, Container, Image, Images, SlideLeft, SlideRight } from './Carousel.styled';
import arrowLeft from '../../assets/images/arrow_left.png';
import arrowRight from '../../assets/images/arrow_right.png';

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
      <Container>
        <Images>
          {images.map((image, i) => (
            i === currentSlide && (
              <Image key={i} src={image} alt="product_image" />
            )
          ))}
        </Images>
        {
          images.length > 1 ?
            <>
              <SlideLeft onClick={this.prevSlide}>
                <Arrow src={arrowLeft} alt="slide_left" />
              </SlideLeft>
              <SlideRight onClick={this.nextSlide}>
                <Arrow src={arrowRight} alt="slide_right" />
              </SlideRight>
            </>
          : null
        }
      </Container>
    );
  }
}

export default Carousel;
