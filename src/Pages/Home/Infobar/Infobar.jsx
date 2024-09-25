import { FcCalendar } from "react-icons/fc";
import { LuPhoneCall } from "react-icons/lu";
import { FaSearchLocation } from "react-icons/fa";

const Infobar = () => {
  return (
    <div className="my-32 bg-black h-[250px] flex justify-between px-20">
      <div className="text-white flex items-center">
        <span><FcCalendar className="text-4xl text-[#FF3811] mr-5"></FcCalendar></span>
        <div>
        <h1>We are open monday to friday</h1>
        <h1 className="text-2xl font-bold"> 7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="text-white flex items-center">
        <span><LuPhoneCall className="text-4xl text-[#FF3811] mr-5"></LuPhoneCall></span>
        <div>
        <h1>Have a question?</h1>
        <h1 className="text-2xl font-bold">+2546 251 2658</h1>
        </div>
      </div>
      <div className="text-white flex items-center">
        <span><FaSearchLocation className="text-4xl text-[#FF3811] mr-5"></FaSearchLocation></span>
        <div>
        <h1>Need a repair? our address</h1>
        <h1 className="text-2xl font-bold">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default Infobar;