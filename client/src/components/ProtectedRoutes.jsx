import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  //   const { currentUser } = useAuth();
  let currentUser = false;
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
