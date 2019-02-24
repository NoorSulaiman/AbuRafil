import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProductThumb = ({ product, open, pushUrl }) => (
  <div className="FProductsThumb">
    <div
      className="productImageContainer"
      onClick={() => {
        pushUrl(product.url);
        open();
      }}
    >
      <img src={product.thumb} alt={product.title} />
    </div>
    <div className="producInfo">
      <h4>{product.title}</h4>
      <small>{product.desc}</small>
    </div>
  </div>
);

ProductThumb.propTypes = {
  product: PropTypes.object.isRequired,
  open: PropTypes.func.isRequired,
  pushUrl: PropTypes.func.isRequired,
};
export default ProductThumb;
