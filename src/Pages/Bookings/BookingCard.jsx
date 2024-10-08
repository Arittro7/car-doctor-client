const BookingCard = ({ booking, handleDeleteBooking, handleBookingConfirm }) => {
  const { _id, Img, price, serviceName, servicingDate, status } = booking;

  return (
    <tr className="border-b border-orange-400">
      <td>
        <label>
          <button onClick={() => handleDeleteBooking(_id)} className="btn btn-sm bg-red-500 text-white btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </td>
      <td>
        <div className="avatar">
          <div className="rounded w-32 h-24">
            <img src={Img} alt="" />
          </div>
        </div>
      </td>
      <td className="text-xl font-semibold">{serviceName}</td>
      <td className="text-xl font-semibold">{servicingDate}</td>
      <td className="text-xl font-semibold">${price}</td>
      <th>
                {
                    status === 'confirm' ? <span className="btn font-bold bg-green-500 py-1 px-3 text-lg text-white">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn font-bold bg-rose-500 py-1 px-3 text-lg text-white">Please Confirm</button>}
            </th>
    </tr>
  );
};

export default BookingCard;
