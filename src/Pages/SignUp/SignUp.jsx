import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {

  const {createUser} = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault();
    const form  = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.log(error)) 
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 mr-20 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <h1 className="text-5xl text-center mb-8 font-bold">Sign Up</h1>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary border-none bg-orange-500" type="submit" value="SignUp" />
            </div>
          </form>
          <p className="text-center mb-6">Already Have an Account! <Link className="text-orange-500" to="/login">Login</Link></p>
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;