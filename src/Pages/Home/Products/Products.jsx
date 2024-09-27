import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className="text-center space-y-5">
      <h2 className="mt-32 text-orange-500 font-bold">Popular Products</h2>

      <h2 className="text-4xl font-bold">Browser Our Products</h2>
      <p className="mb-16">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
       {
         products.map(product => <ProductCard
         key={product.Id}
         product={product}
         ></ProductCard>)
       }      
      </div>
      <button className="text-orange-400 py-2 px-3 border-2 border-orange-400">More Products</button>

    </div>
  );
};

export default Products;