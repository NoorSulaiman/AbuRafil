import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'lightbox-react';

import './styles.css';
import ProductThumb from '../Templates/ProductThumb';

const MenuItems = ({ items, category }) => {
  const [isOpen, setToggle] = useState(false);
  const [targetUrl, pushUrl] = useState('');
  const open = () => setToggle(!isOpen);
  return (
    <div>
      <div className="menuProductHeader">
        <h1>{category}</h1>
      </div>
      <div id="menuItems" className="container products">
        {items.map(product => (
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

MenuItems.propTypes = {
  items: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default MenuItems;
