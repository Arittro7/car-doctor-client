import { useLoaderData } from "react-router-dom";
import img1 from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';
import { FaCarSide } from "react-icons/fa";

const Book = () => {
  const services = useLoaderData();
  const {user} = useContext(AuthContext)
  const { title, price, _id, img } = services;

  const handleBookService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;

    const booking = {
      customerName : name,
      email,
      servicingDate: date,
      serviceId: _id,
      serviceName: title,
      Img: img,
      price: price
    }

    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "Confirm",
          text: "Your Booking Just Confirmed",
          icon: "success"
        });
      }
    })
  }

  return (
    <div>
      <div
        className="hero h-[300px] relative"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <h2 className="absolute bottom-1 px-3 bg-rose-600 text-3xl text-white">Book a Service</h2>
        <div className="hero-overlay bg-opacity-50"></div>

        <div className="hero-content text-neutral-content flex flex-col justify-start items-start">
          <h1 className="text-5xl font-bold">Booking for : <span className="text-rose-300 uppercase">{title}</span></h1>
        </div>
      </div>

      {/* From section */}
      <form onSubmit={handleBookService}
      className="card-body bg-orange-100 mt-11
      ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="ml-2 mb-2"> Your Name </label>
          <input type="text" name="name" defaultValue={user?.name} placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="ml-2 mb-2"> Pick Servicing Date  </label>
          <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="ml-2 mb-2"> Your Email </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="ml-2 mb-2"> Servicing Cost </label>
          <input type="number" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-rose-500 text-white">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Book;