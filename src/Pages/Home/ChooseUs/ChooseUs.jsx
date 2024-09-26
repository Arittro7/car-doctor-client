import Lottie from "lottie-react";
import team from  '../../../../public/Team.json';
import clock from  '../../../../public/clock.json';
import spt from  '../../../../public/247.json';
import gear from  '../../../../public/gear.json';
import safe from  '../../../../public/safe.json';
import delivery from  '../../../../public/delivery.json';

const ChooseUs = () => {
  return (
    <div className="text-center space-y-5">
      <h2 className="mt-32 text-orange-500 font-bold">Core Features</h2>
      <h2 className="text-4xl font-bold">Why Choose Us</h2>
      <p className="mb-16">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
      <div className="flex gap-16 justify-center items-baseline">
        <div>
        <Lottie className="w-24" animationData={team}/>
        <h2 className="font-bold">Expert Team</h2>
        </div>
        <div>
        <Lottie className="w-24" animationData={clock}/>
        <h2 className="font-bold">Fastest Repair</h2>
        </div>
        <div>
        <Lottie className="w-24" animationData={spt}/>
        <h2 className="font-bold">24/7 Support</h2>
        </div>
        <div>
        <Lottie className="w-28" animationData={gear}/>
        <h2 className="font-bold">Best Equipment</h2>
        </div>
        <div>
        <Lottie className="w-40" animationData={safe}/>
        <h2 className="font-bold mt-4">100% Guarantee</h2>
        </div>
        <div>
        <Lottie className="w-32" animationData={delivery}/>
        <h2 className="font-bold">Timely Delivery</h2>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;