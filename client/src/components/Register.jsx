import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "./Style.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const navigate = useNavigate();

  const { register } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password, firstname, lastname, phoneno);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form">
        <form className="register" onSubmit={handleSubmit}>
          <h2 className="head2">Register yourself as a Freelancer</h2> <br></br>
          <label htmlFor="firstname">First Name</label>
          <input
            value={firstname}
            type="text"
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="Firstname"
            id="firstname"
            name="firstname"
          ></input>
          <label htmlFor="lastname">Last Name</label>
          <input
            value={lastname}
            type="text"
            onChange={(e) => setlastName(e.target.value)}
            placeholder="LastName"
            id="lastname"
            name="lastname"
          ></input>
          <label htmlFor="phoneno">Phone No</label>
          <input
            value={phoneno}
            type="text"
            onChange={(e) => setPhoneno(e.target.value)}
            placeholder="Phone No"
            id="phoneno"
            name="phoneno"
            required
          ></input>
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
          <button type="submit">SignIn</button> <br></br>
        </form>

        <Link className="linkbtn" to="/login">
          Already have an account? LogIn Here
        </Link>
      </div>
    </div>
  );
};

export default Register;
