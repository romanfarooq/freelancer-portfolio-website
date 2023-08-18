import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "./Style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form">
        <form className="login" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Adress"
            id="email"
            name="email"
            required
          ></input>
          <label htmlFor="paswsword">Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
            name="password"
            required
          ></input>{" "}
          <br></br>
          <button type="submit">LogIn</button>
          <br></br>
          <h2 className="head2">Or SignUp with</h2>
        </form>
        <Link className="linkbtn" to="/register">
          Don&apos;t have an Account? Register Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
