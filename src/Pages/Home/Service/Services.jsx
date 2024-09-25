import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect (() =>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])


  return (
    <div className="text-center space-y-5">
      <h2 className="mt-32 text-orange-500">Service</h2>
      <h2 className="text-4xl">Our Service Area</h2>
      <p className="mb-16">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {
        services.map(service => <ServiceCard
        key ={service._id}
        service ={service}
        ></ServiceCard>)
      }
      </div>
      <button className="text-orange-400 py-2 px-3 border-2 border-orange-400">More Services</button>

    </div>
  );
};

export default Services;