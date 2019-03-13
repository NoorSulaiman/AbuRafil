import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';
import PageTitle from '../../components/PageTitle';
import background from '../../assets/pageTitleImages/product.jpg';
import CategoryList from '../../components/CategoryList';
import AdSpace from '../../components/AdSpace';
import MenuItems from '../../components/MenuItems';

const Menu = ({ adv, menu }) => {
  const adImage1 = adv[0].adImageUrl;
  const adLink1 = adv[0].adLink;
  const adImage2 = adv[1].adImageUrl;
  const adLink2 = adv[1].adLink;
  const tabs = [];
  return (
    <div>
      <PageTitle title="Our Menu" background={background} />
      <div className="menuContainer">
        <aside>
          <CategoryList tabs={tabs} />
        </aside>
        <div className="menu">
          <div id="menuPageAd">
            <AdSpace adImage={adImage1} adLink={adLink1} />
            <AdSpace adImage={adImage2} adLink={adLink2} />
          </div>
          <div ref={tab => tabs.push(tab)} className="category">
            <MenuItems items={menu.category1} category="Pastry" />
          </div>
          <div ref={tab => tabs.push(tab)} className="category">
            <MenuItems items={menu.category2} category="Bagels" />
          </div>
          <div ref={tab => tabs.push(tab)} className="category">
            <MenuItems items={menu.category3} category="Sandwiches" />
          </div>
        </div>
      </div>
    </div>
  );
};
Menu.propTypes = {
  adv: PropTypes.array.isRequired,
  menu: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    adv: state.Data.adv.menuPage,
    menu: state.Data.menu,
  };
}

export default connect(mapStateToProps)(Menu);
