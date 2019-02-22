import React from 'react';

import './styles.css';

const CeoQoute = () => (
  <div id="CeoQoute">
    <div id="ImageContainer">
      <img
        src={require('../../assets/sliderImages/signature.png')}
        alt="A baker putting a dough in the oven with a wood stick"
      />
    </div>
    <div id="ceoText">
      <p>
        “It seems that every country that can get its hands on butter has its
        opinion of what butter cream frosting should be. Some are made with eggs
        and butter.”
      </p>
      <small>Abu Rafil - CEO AbuRafil</small>
    </div>
  </div>
);
export default CeoQoute;
