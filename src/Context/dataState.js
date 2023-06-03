import DataContext from "./dataContext";
import { useEffect, useState } from "react";
import env from "../env";

const DataState = (props) => {
  const host = env.host;
  const url = env.host;
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [coin, setCoin] = useState({});
  const [Register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [username, setUsername] = useState("User");

  const signup = () => {
    console.log(Register);
  };
  const Login = () => {
    console.log(credentials);
  };



  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token == null) {
      localStorage.setItem("auth-token", "");
      token = "";
      setUserData({ token: undefined, user: undefined });
      return;
    }

    const headers = {
      "x-auth-token": token,
    };

    try {
      const tokenIsValidResponse = await fetch(`${url}/validate`, {
        method: "POST",
        headers,
      });

      if (!tokenIsValidResponse.ok) {
        throw new Error("Token validation failed");
      }

      const tokenIsValid = await tokenIsValidResponse.json();

      if (tokenIsValid) {
        const userRes = await fetch(`${url}/validate`, {
        method: "POST",
          headers,
       
        });

        if (!userRes.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await userRes.json();
        

        setUserData({
          token,
          user: userData.status,
        });
        setUsername(userData.username)
        console.log("usernma",userData.username);
      } else {
        setUserData({ token: undefined, user: undefined });
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <DataContext.Provider
      value={{
        host,
        Register,
        setRegister,
        credentials,
        setCredentials,
        signup,
        Login,
        userData,
        setUserData,
        checkLoggedIn,
        username,
        setUsername,
        coin,
        setCoin
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
