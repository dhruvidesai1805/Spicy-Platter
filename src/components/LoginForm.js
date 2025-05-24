import React, { useState } from "react";
import "./LoginForm.css";
import logologin from "../assests/logologin.jpeg";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState("");
  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError(""); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(""); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = isNewUser
      ? "process.env.REACT_APP_API_URLapi/signup"
      : "process.env.REACT_APP_API_URLapi/login";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
      setUsername("");
      setPassword("");
      window.location.href = "/home";
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <div className="login-body">
        <section>
          <div className="abc">
            <p className="about-fade-photos">Admin Login</p>
            <p className="about-banner-text-photos">LOGIN</p>
          </div>
        </section>

        <div className="login-container">
          <img src={logologin} alt="Your Logo" className="logologin" />
          <h1>{isNewUser ? "SIGN UP" : "LOGIN"}</h1>
          <form className="logform" onSubmit={handleSubmit}>
            <label>
              UserName:&nbsp;
              <input
                type="text"
                className="user-input"
                placeholder="Username"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
            <label>
              Password:&nbsp;
              <input
                type="password"
                className="user-input"
                name="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            {error && <p className="error-message text-danger">{error}*</p>}
            <div className="adminbutton">
              <button type="submit" className="loginbtn">
                {isNewUser ? "Sign Up" : "Login"}
              </button>
            </div>
          </form>
          <div className="adminbutton">
            {isNewUser ? (
              <p>
                Already have an account?{" "}
                <strong
                  className="border-bottom text-dark"
                  onClick={() => setIsNewUser(false)}
                >
                  Login
                </strong>
              </p>
            ) : (
              <p>
                New user?{" "}
                <strong
                  className="border-bottom text-dark"
                  onClick={() => setIsNewUser(true)}
                >
                  Sign Up
                </strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
