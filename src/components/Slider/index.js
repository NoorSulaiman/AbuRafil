import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './styles.css';

const Slider = props => {
  const { slides } = props;

  return (
    <Carousel
      autoPlay
      showArrows
      infiniteLoop
      stopOnHover
      dynamicHeight
      showThumbs={false}
      showStatus={false}
    >
      {slides.map(slide => (
        <div className="imgSlide">
          <img
            src={require('../../assets/sliderImages/slider-5.png')}
            alt="bakery products"
          />
        </div>
      ))}
    </Carousel>
  );
};

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Slider;
