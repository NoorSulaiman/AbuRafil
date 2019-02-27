import React from 'react';

import '../../plugins/bakery-icon/font/flaticon.css';
import './styles.css';

const Facts = () => (
  <div className="facts">
    <div className="container factsContainer">
      <div className="factIconContainer">
        <i className="flaticon-003-biscuit-1" />
        <h4>
          Master Chef
          <span>WITH PASSION</span>
        </h4>
        <p>Shop zillions of finds, with new arrivals added daily. </p>
      </div>
      <div className="factIconContainer">
        <i className="flaticon-007-cake-7" />
        <h4>
          Natural Materials
          <span>protect your family</span>
        </h4>
        <p>Shop zillions of finds, with new arrivals added daily. </p>
      </div>
      <div className="factIconContainer">
        <i className="flaticon-017-cake-3" />
        <h4>
          Attractive Flavor
          <span>ALWAYS LISTEN</span>
        </h4>
        <p>
          We offer a 24/7 customer hotline so you’re never alone if you have a
          question.
        </p>
      </div>
    </div>
  </div>
);
export default Facts;
