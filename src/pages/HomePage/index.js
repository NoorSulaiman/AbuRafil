import React, { Component } from 'react';

import './styles.css';
import Slider from '../../components/Slider';

class HomePage extends Component {
  state = {
    slides: require('./images.json'),
  };

  render() {
    const { slides } = this.state;
    return <Slider slides={slides} />;
  }
}

export default HomePage;
