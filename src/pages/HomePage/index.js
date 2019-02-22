import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/dataActions';

import './styles.css';
import Slider from '../../components/Slider';
import CeoQoute from '../../components/CeoQoute';

class HomePage extends Component {
  // componentWillMount() {
  //   this.props.fetchData();
  // }

  render() {
    const { images } = this.props;

    return (
      <div>
        <section>
          <Slider slides={images} />
        </section>
        <section>
          <CeoQoute />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.Data.images,
    qoute: state.Data.text,
  };
}
HomePage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  { fetchData }
)(HomePage);
