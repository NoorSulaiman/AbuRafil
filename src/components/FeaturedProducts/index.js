import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'lightbox-react';

import './styles.css';
import ProductThumb from '../ProductThumb';

const FeaturedProducts = ({ FProducts }) => {
  const [isOpen, setToggle] = useState(false);
  const [targetUrl, pushUrl] = useState('');
  const open = () => setToggle(!isOpen);
  return (
    <div className="productWrapper">
      <div className="productHeader">
        <h1>Featured Products</h1>
        <p>Fresh Every Day</p>
        <div>
          <img src={require('../../assets/productImages/floral.png')} alt="" />
        </div>
      </div>
      <div className="container products">
        {FProducts.map(product => (
          <ProductThumb product={product} pushUrl={pushUrl} open={open} />
        ))}
        {isOpen && (
          <Lightbox
            id="lightBox"
            mainSrc={targetUrl}
            onCloseRequest={() => open()}
          />
        )}
      </div>
    </div>
  );
};

FeaturedProducts.propTypes = {
  FProducts: PropTypes.array.isRequired,
};

export default FeaturedProducts;
