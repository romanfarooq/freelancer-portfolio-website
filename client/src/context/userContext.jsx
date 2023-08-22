import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "../api/axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMe = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/auth/me");
        setUser(res.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMe();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await axios.post("/auth/login", { email, password });
      setUser(res.data.user);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await axios.get("/auth/logout");
      setUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password, firstName, lastName, phoneno) => {
    try {
      setLoading(true);
      const res = await axios.post("/auth/register", {
        email,
        password,
        firstName,
        lastName,
        phoneno,
      });
      setUser(res.data.user);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const value = { user, loading, login, logout, register };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
