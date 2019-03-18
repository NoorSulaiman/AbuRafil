import React from 'react';

import './styles.css';
import PageTitle from '../../components/PageTitle';
import ContactBackground from '../../assets/pageTitleImages/contact.jpg';

const Contact = () => (
  <div className="contact">
    <PageTitle title="Contact" background={ContactBackground} />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.0121675413648!2d44.41463514998406!3d33.292344664745116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155781c9f41d2a53%3A0xe8b3348e9928e666!2sAbu+Sweets+Raffles!5e0!3m2!1sen!2sus!4v1552945297943" />
  </div>
);

export default Contact;
