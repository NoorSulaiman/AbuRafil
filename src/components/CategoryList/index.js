import React from 'react';
import { smoothScroll } from '../../utils/smoothScroll';

const CatgeoryList = () => (
  <div className="categoryListContainer">
    <ul>
      <li onClick={() => smoothScroll.scrollTo('category-1')}>Pastry</li>
      <li onClick={() => smoothScroll.scrollTo('category-2')}>Bagels</li>
      <li onClick={() => smoothScroll.scrollTo('category-2')}>sandwiches</li>
    </ul>
  </div>
);

export default CatgeoryList;
