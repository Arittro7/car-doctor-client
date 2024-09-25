import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Service/Services';
import Infobar from '../Infobar/Infobar';
import Products from '../Products/Products';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Infobar></Infobar>
      <Products></Products>
    </div>
  );
};

export default Home;