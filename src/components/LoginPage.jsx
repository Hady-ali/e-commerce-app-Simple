import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
      if (user.role === "customer") {
        navigate("/products"); // Redirect to Products Page
      } else if (user.role === "seller") {
        navigate("/seller-dashboard"); // Redirect to Seller Dashboard
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">User Name: </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
