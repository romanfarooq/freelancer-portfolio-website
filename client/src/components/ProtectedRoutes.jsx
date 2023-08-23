import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Loader from "./Loader";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  if (loading) return <Loader />;
  else if (user) return <Outlet />;
  else return <Navigate to="/login" />;
};

export default ProtectedRoutes;
