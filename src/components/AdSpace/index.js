import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const AdSpace = ({ adImage, adLink }) => (
  <div className="addContainer">
    <a href={adLink}>
      <img src={adImage} alt="adv space" />
    </a>
  </div>
);

AdSpace.propTypes = {
  adImage: PropTypes.string.isRequired,
  adLink: PropTypes.string.isRequired,
};

export default AdSpace;
