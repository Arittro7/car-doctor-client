import logo from "../../assets/icons/logoCD.png";
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer mt-20 bg-black text-white p-10">
      <aside>
        <img className="h-28" src={logo} alt="" />
        <p>
          Car Doctor Repair
          <br />
          Providing reliable service since 2007
        </p>
        <div className="flex text-3xl justify-center space-x-3">
    <AiFillGoogleCircle className="text-white"></AiFillGoogleCircle>
    <AiFillTwitterCircle className="text-white"></AiFillTwitterCircle>
    <FaLinkedin className="text-white rounded-full"></FaLinkedin>
    <RiInstagramFill className="text-white"></RiInstagramFill>
  </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
