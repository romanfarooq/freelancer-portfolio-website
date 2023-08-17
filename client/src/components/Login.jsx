import { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
