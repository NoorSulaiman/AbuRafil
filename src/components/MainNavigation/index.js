import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../Logo';

const MainNavigation = () => (
  <nav id="navigation">
    <div id="navigationContainer">
      <ul id="nav-list">
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <div id="logoContainer">
          <Logo />
        </div>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default MainNavigation;
