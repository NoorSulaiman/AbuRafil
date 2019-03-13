import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GalleryModal from './modal';
import PageTitle from '../../components/PageTitle';
import GalleryBackground from '../../assets/pageTitleImages/about.jpg';
import './styles.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    const { Gimages } = this.props;
    this.state = { currentIndex: null, IMAGES: Gimages };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  openModal(e, index) {
    this.setState({ currentIndex: index });
  }

  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }

  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }

  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }

  renderImageContent(src, index) {
    return (
      <div onClick={e => this.openModal(e, index)}>
        <img src={src.thumb} key={src.thumb} />
      </div>
    );
  }

  render() {
    const { IMAGES, currentIndex } = this.state;
    return (
      <div>
        <PageTitle title="Gallery" background={GalleryBackground} />
        <div className="gallery-container">
          <div className="gallery-grid">
            {IMAGES.map(this.renderImageContent)}
          </div>
          <GalleryModal
            closeModal={this.closeModal}
            findPrev={this.findPrev}
            findNext={this.findNext}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex + 1 < IMAGES.length}
            src={IMAGES[currentIndex]}
          />
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  Gimages: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    Gimages: state.Data.Gimages,
  };
}

export default connect(mapStateToProps)(Gallery);
