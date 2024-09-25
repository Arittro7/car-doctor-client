import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="w-[460px] h-[473px] object-cover object-left rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-[327px] h-[332px] absolute right-9 top-1/2 border-8 object-cover object-top rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2 space-y-6">
          <h1 className="text-2xl text-orange-500 font-bold">About Us</h1>
          <h1 className="text-5xl w-[376px] font-bold">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum <br />available, but
            the majority have suffered alteration in some <br /> form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected <br />
            humour, or randomised words which don't look even slightly <br />
            believable.
          </p>
          <button className="btn bg-orange-600 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
