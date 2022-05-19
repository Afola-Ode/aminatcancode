import "./App.css";
import { useState } from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import NewLogin from "./components/NewLogin/NewLogin";
import NewSignUp from "./components/NewSignUp/NewSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<NewLogin />} />
        <Route path='sign-up' element={<NewSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
