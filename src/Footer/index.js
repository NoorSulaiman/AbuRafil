import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaWallet,
} from 'react-icons/fa';

import './styles.css';
import Logo from '../components/Logo';

const index = () => (
  <footer>
    <div id="footer-content">
      <div className="site-info">
        <div id="footerLogo-container">
          <Logo />
        </div>
        <p id="info-footer">
          Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops
          brownie.
        </p>
        <ul id="social-list">
          <li>
            <a
              className="social-icon-link"
              href="https://www.facebook.com/aburafil.iq/"
            >
              <FaFacebookF className="social-icon" />
            </a>
          </li>
          <li>
            <a
              className="social-icon-link"
              href="https://www.facebook.com/aburafil.iq/"
            >
              <FaInstagram className="social-icon" />
            </a>
          </li>
          <li>
            <a
              className="social-icon-link"
              href="https://www.facebook.com/aburafil.iq/"
            >
              <FaYoutube className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="site-info">
        <h4>Contact with me</h4>
        <p className="contact-footer">
          PO Box 16122 Collins Street West,Victoria 8007 Australia
        </p>
        <p className="contact-footer">(+84 ) 7534 9773, (+84 ) 874 548</p>
      </div>
      <div className="site-info">
        <h4>Time to Open</h4>
        <p id="open-footer">
          Monday - Friday: <br />
          08:00 am - 08:30 pm <br />
          Saturday - Sunday:
          <br />
          10:00 am - 16:30 pm
        </p>
        <ul id="payment-list">
          <li>
            <a
              className="payment-icon-link"
              href="https://www.facebook.com/aburafil.iq/"
            >
              <FaCcVisa className="payment-icon" />
            </a>
          </li>
          <li>
            <a
              className="payment-icon-link"
              href="https://www.facebook.com/aburafil.iq/"
            >
              <FaCcMastercard className="payment-icon" />
            </a>
          </li>
          <li>
            <a
              className="payment-icon-link"
              href="https://www.facebook.com/aburafil.iq/"
            >
              <FaWallet className="payment-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copy-right">
      <div className="container">
        <p>
          © Copyright by <strong>AbuRafil</strong>. Design by
          <a href="#"> d3 Studio.</a>
        </p>
      </div>
    </div>
  </footer>
);
export default index;
