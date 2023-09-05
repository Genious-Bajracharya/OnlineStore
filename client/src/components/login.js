import React, { useState } from "react";
import Navbar from "./Navbar";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const Auth = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <Navbar />
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
