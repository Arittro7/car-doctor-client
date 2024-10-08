import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
  const {_id, price, img, title} = service
  return (
    <div className="card card-compact  w-96 shadow-xl">
  <figure>
    <img className="rounded-xl"
      src={img}
      alt="Img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{title}</h2>
    <div className="card-actions text-2xl place-items-center  text-orange-500">
    <p className="text-left">Price : ${price}</p>
    <Link to={`/book/${_id}`}><button><FaArrowRight></FaArrowRight></button></Link>
    </div>
  </div>
</div>
  );
};

export default ServiceCard;