import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';
import PageTitle from '../../components/PageTitle';
import background from '../../assets/pageTitleImages/product.jpg';
import CategoryList from '../../components/CategoryList';

const Products = ({ adv, menu }) => (
  // const tabs = [React.createRef(), React.createRef(), React.createRef()];

  <div>
    <PageTitle title="Our Menu" background={background} />
    <div className="productsContainer">
      <aside>
        <CategoryList />
      </aside>
      <div className="menu">
        <div id="category-1" className="category" />
        <div id="category-2" className="category" />
        <div id="category-3" className="category" />
      </div>
    </div>
  </div>
);
Products.propTypes = {
  adv: PropTypes.array.isRequired,
  menu: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    adv: state.Data.adv.productsPage,
    menu: state.Data.menu,
  };
}

export default connect(mapStateToProps)(Products);
