import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function sendLogin(cred) {
    return axios
      .post("https://storeapp-bi.azurewebsites.net/api/login", cred)
      .then((res) => res.data.token);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await sendLogin({
      email,
      password,
    });
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type='text' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;
