import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imgUrl, alt }) => (
  <div>
    <img src={imgUrl} alt={alt} />
  </div>
);
Image.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Image;
