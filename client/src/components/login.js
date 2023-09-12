import React, { useState } from "react";
import Navbar from "./Navbar";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

export default function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const Auth = (e) => {
    e.preventDefault();
    fetch(
      "https://fakestoreapi.com/auth/login",
      {
        username: username,
        password: password,
      },
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data) {
        setLoginStatus(response.data);
      } else {
        // setLoginStatus(response.data[0].email);
        localStorage.setItem("username", username);
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={Auth}>Login</button>
    </div>
  );
}
