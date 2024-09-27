import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const TeamCard = ({team}) => {
  const {Img, Name, WorkingField} = team

  return (
    <div className="card card-compact bg-orange-100 p-6 w-96 shadow-xl">
  <figure>
    <img className="rounded-xl w-[314px] h-[215px] object-cover"
      src={Img}
      alt="Img" />
  </figure>
  <div className="card-body flex text-center">
    <h2 className="text-3xl font-bold">{Name}</h2>
    <div className="text-2xl place-items-center">{WorkingField}</div>
  </div>
  <div className="flex text-3xl justify-center space-x-3">
    <button><FaFacebook className="text-blue-800"></FaFacebook></button>
    <button><AiFillTwitterCircle className="text-blue-500"></AiFillTwitterCircle></button>
    <button><FaLinkedin className="text-blue-700 rounded-full"></FaLinkedin></button>
    <button><RiInstagramFill className="text-[#ef4862]"></RiInstagramFill></button>
  </div>
</div>
  );
};

export default TeamCard;