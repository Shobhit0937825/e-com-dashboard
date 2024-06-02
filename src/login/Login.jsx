import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/reducers/auth";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); // New state for email error

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    console.log("login", email, password);
    dispatch(login({ email, password })).then((action) => {
      localStorage.setItem("accessToken", action.payload.token);
      if (email && password) {
        navigate("/home");
      }
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(""); // Clear the email error when user starts typing
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
