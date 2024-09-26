import user from '../../../assets/images/team/user.png'
import { CiStar } from "react-icons/ci";

const Testimonial = () => {
return (
  <div className="text-center space-y-5">
    <h2 className="mt-32 text-orange-500 font-bold">Testimonial</h2>
    <h2 className="text-4xl font-bold">What Customer Says</h2>
    <p className="mb-16">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>

    <div className="flex">
      <div className='w-1/2 p-5 '>
        <div className='flex space-x-4 '>
          <img className='w-12 h-12 rounded-full' src={user} alt="" />
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500 -mt-2">Businessman</p>
          </div>
        </div>
        <p className='text-left'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className='w-1/2 p-5'>
        <div className='flex space-x-4'>
          <img className='w-12 h-12 rounded-full' src={user} alt="" />
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500 -mt-2">Businessman</p>
          </div>
        </div>
        <p className='text-left'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      
    </div>
  </div>
);
};

export default Testimonial;