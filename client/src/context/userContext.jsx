import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "../api/axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const getUser = async () => {
  //       try {
  //         const res = await axios.get("/auth/user");
  //         setUser(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getUser();
  //   }, []);

  const login = async (email, password) => {
    const res = await axios.post("/api/auth/login", { email, password });
    setUser(res.data.user);
    localStorage.setItem("token", res.data.token);
  };

  const logout = () => {
    // await axios.get("/api/auth/logout");
    setUser(null);
    localStorage.removeItem("token");
  };

  const register = async (email, password, firstName, lastName, phoneno) => {
    const res = await axios.post("/api/auth/register", {
      email,
      password,
      firstName,
      lastName,
      phoneno,
    });
    setUser(res.data.user);
    localStorage.setItem("token", res.data.token);
  };

  const value = { user, login, logout, register };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
