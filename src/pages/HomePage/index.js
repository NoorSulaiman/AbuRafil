import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/dataActions';

import './styles.css';
import Slider from '../../components/Slider';
import CeoQoute from '../../components/CeoQoute';
import FeaturedProducts from '../../components/FeaturedProducts';

class HomePage extends Component {
  // componentWillMount() {
  //   this.props.fetchData();
  // }

  render() {
    const { SliderImages, FProducts } = this.props;

    return (
      <div>
        <section>
          <Slider slides={SliderImages} />
        </section>
        <section>
          <CeoQoute />
        </section>
        <section>
          <FeaturedProducts FProducts={FProducts} />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    SliderImages: state.Data.SliderImages,
    FProducts: state.Data.FProducts,
  };
}
HomePage.propTypes = {
  SliderImages: PropTypes.array.isRequired,
  FProducts: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  { fetchData }
)(HomePage);
