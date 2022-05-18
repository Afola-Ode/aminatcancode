import "./App.css";
import { useState } from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
