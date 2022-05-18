import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";

const SignUp = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  async function sendLogin(cred) {
    return axios
      .post("https://storeapp-bi.azurewebsites.net/api/login", cred)
      .then((res) => res.data.token);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await sendLogin({
      name,
      email,
      password,
    });
    localStorage.setItem("token", token);
    setToken(token);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        <p>Email</p>
        <input type='text' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};
SignUp.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default SignUp;
