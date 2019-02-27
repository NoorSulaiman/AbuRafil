import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../Logo';
import ToggleButton from '../../Addons/ToggleButton';

class MobileNavigation extends React.Component {
  state = {
    name: 'hide',
  };

  toggleHandler = () => {
    if (this.state.name === 'hide') {
      this.setState({ name: 'visible', toggle: true });
    } else {
      this.setState({ name: 'hide', toggle: false });
    }
  };

  render() {
    return (
      <nav id="mobile-navigation">
        <div id="navigationContainer">
          <div id="mobile-logoContainer">
            <Logo />
          </div>
          <ul id="mobile-nav-list" className={this.state.name}>
            <li>
              <Link onClick={this.toggleHandler} to="/">
                HomePage
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleHandler} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleHandler} to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleHandler} to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleHandler} to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleHandler} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div onClick={this.toggleHandler}>
            <ToggleButton toggle={this.state.toggle} />
          </div>
        </div>
      </nav>
    );
  }
}

export default MobileNavigation;
