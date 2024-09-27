import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const services = useLoaderData()
  const {title} = services
  return (
    <div>
      <h2>Check Out :{title}</h2>
    </div>
  );
};

export default CheckOut;