import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Service/Services';
import Infobar from '../Infobar/Infobar';
import Products from '../Products/Products';
import Teams from '../Team/Teams';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Infobar></Infobar>
      <Products></Products>
      <Teams></Teams>
    </div>
  );
};

export default Home;