import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

const PageTitle = ({ background, title }) => (
  <div
    className="PageTitleContainer"
    style={{ backgroundImage: `url(${background})` }}
  >
    <h1>{title}</h1>
    <ol className="breadcrumb">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="active">{`> ${title}`}</li>
    </ol>
  </div>
);

PageTitle.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageTitle;
