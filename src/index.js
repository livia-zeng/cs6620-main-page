import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home/:username" element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
