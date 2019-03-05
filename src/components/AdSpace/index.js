import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const AdSpace = ({ adImage, adLink }) => (
  <div className="addContainer">
    <a href={adLink} className="adLink_overlay" />
    <img src={adImage} alt="adv space" />
  </div>
);

AdSpace.propTypes = {
  adImage: PropTypes.string.isRequired,
  adLink: PropTypes.string.isRequired,
};

export default AdSpace;
