import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

const Products = ({ advProducts }) => (
  <div className="container productsContainer">
    <h1>Our Products</h1>
  </div>
);

Products.propTypes = {
  advProducts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    advProducts: state.Data.adv.productsPage,
  };
}

export default connect(mapStateToProps)(Products);
