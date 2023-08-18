import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}
