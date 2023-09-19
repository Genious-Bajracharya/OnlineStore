import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./../login.css";

export default function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const navigate = useNavigate();

  const Auth = (e) => {
    e.preventDefault();
    try {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          // username: "johnd",
          // password: "m38rmF$",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // if (data && data.id !== undefined) {
          //   const userId = data.id;
          //   console.log("User ID:", userId);
          //   // You can store the user ID in state or a variable for further use.
          // } else {
          //   throw new Error("User ID not found in the response"); // Handle missing user ID
          // }
          const userId = data.id;
          console.log("User ID:", userId);

          setLoginStatus(true);
          navigate("/");
          console.log(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          alert("INcorrect habibi");
        });
    } catch (error) {
      console.log("now work ahah");
    }
  };

  return (
    <div className="login-page">
      <div className="login-right">
        <h1>Welcome to The Fake store</h1>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="email"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={Auth}>Login</button>
      </div>
    </div>
  );
}
