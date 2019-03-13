import React from 'react';

import './styles.css';
import PageTitle from '../../components/PageTitle';
import AboutBackground from '../../assets/pageTitleImages/blog.jpg';

const About = () => (
  <div>
    <PageTitle title="About us" background={AboutBackground} />
    <div id="CeoQoute">
      <div id="ImageContainer">
        <img
          src={require('../../assets/sliderImages/signature.png')}
          alt="A baker putting a dough in the oven with a wood stick"
        />
      </div>
      <div id="ceoText">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum velit
          suscipit explicabo? Commodi dolorum pariatur quisquam sunt explicabo
          velit eius nihil sit quis culpa mollitia ab, consequuntur, libero nam
          neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita perferendis asperiores modi, voluptatibus voluptas eum
          doloribus, exercitationem, incidunt ab consequatur at dicta corrupti
          numquam iusto harum eligendi eos suscipit eveniet?
        </p>
      </div>
    </div>
  </div>
);

export default About;
