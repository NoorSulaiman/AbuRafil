import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
          <img src={slide.url} alt="bakery products" />
        </div>
      ))}
    </Carousel>
  );
};

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Slider;
