import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

  const {user, loading} =useContext(AuthContext);
  const location = useLocation()
  console.log(location);

  if (loading) {
    return <progress className="progress text-center w-56"></progress>
  }
  
  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRoutes;