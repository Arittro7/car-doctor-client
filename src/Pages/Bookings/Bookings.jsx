import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingCard from "./BookingCard";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  //

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url, {withCredentials: true})
      .then((res) => setBookings(res.data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, [url]);
  //

  const handleDeleteBooking = (id) => {
    // const proceed = confirm('Are You sure you want to delete');
    Swal.fire({
      title: "Are you sure you want to delete this booking?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
      icon: "warning",
    }).then((result) => {
      // if (proceed) {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // alert('deleted successful');
              Swal.fire("Deleted!", "The booking has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining); // Update the state to remove the deleted booking
            }
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "There was a problem deleting the booking.",
              "error"
            );
            console.error("Delete failed:", error);
          });
      } else if (result.isDenied) {
        Swal.fire("Cancelled", "The booking was not deleted", "info");
      }
    });
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">
        You have <span className="text-3xl font-bold">{bookings.length}</span>{" "}
        bookings
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-2xl uppercase border-b-2 border-green-500">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                handleDeleteBooking={handleDeleteBooking}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
