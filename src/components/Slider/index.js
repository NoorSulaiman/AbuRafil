import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = props => {
  const { slides } = props;

  return (
    <Carousel autoPlay>
      {slides.map(slide => (
        <div>
          <img src={require(`${slide.url}`)} alt="bakery products" />
        </div>
      ))}
    </Carousel>
  );
};

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Slider;
