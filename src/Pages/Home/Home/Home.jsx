import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Service/Services';
import Infobar from '../Infobar/Infobar';
import Products from '../Products/Products';
import Teams from '../Team/Teams';
import ChooseUs from '../ChooseUs/ChooseUs';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Infobar></Infobar>
      <Products></Products>
      <Teams></Teams>
      <ChooseUs></ChooseUs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;