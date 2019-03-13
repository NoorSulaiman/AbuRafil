import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { smoothScroll } from '../../utils/smoothScroll';

const CatgeoryList = ({ tabs }) => (
  <div className="categoryListContainer">
    <h3>Categories</h3>
    <ul>
      <li onClick={() => smoothScroll.scrollTo(tabs[0])}>Pastry</li>
      <li onClick={() => smoothScroll.scrollTo(tabs[1])}>Bagels</li>
      <li onClick={() => smoothScroll.scrollTo(tabs[2])}>sandwiches</li>
    </ul>
  </div>
);

CatgeoryList.propTypes = {
  tabs: PropTypes.object.isRequired,
};

export default CatgeoryList;
