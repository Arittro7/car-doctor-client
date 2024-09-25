

const ProductCard = ({product}) => {

  const {Title, Price, Ratings, ImageUrl} = product;


  return (
    <div className="card card-compact  w-96 shadow-xl">
  <figure>
    <img className="rounded-xl h-[215px] w-[314px] object-cover"
      src={ImageUrl}
      alt="Img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{Title}</h2>
    <div className="card-actions text-2xl place-items-center  text-orange-500">
    <p className="text-left">Price : ${Price}</p>
    </div>
  </div>
</div>
  );
};

export default ProductCard;