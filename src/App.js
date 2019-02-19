import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './generalStyles.css';
import Header from './Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './Footer';
import BackToTop from './Addons/BackToTop';

const App = ({ location }) => (
  <div>
    <Header />
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/about" exact component={About} />
    <Route location={location} path="/menu" exact component={Menu} />
    <Route location={location} path="/services" exact component={Services} />
    <Route location={location} path="/gallery" exact component={Gallery} />
    <Route location={location} path="/contact" exact component={Contact} />
    <Footer />
    <BackToTop />
  </div>
);
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
export default App;
