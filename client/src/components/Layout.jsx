import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function Layout() {
  const { logout } = useContext(UserContext);

  function handleLogout() {
    logout();
  }
  return (
    <>
      <h1>Layout</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Outlet />
    </>
  );
}
