import React from "react";
import Login from "./Login";
import "./Signin.css";

function Signin() {
  return (
    <>
      {/* <div className="signin">
        <div className="signin_left">
          <div className="signin_left_box">
            <img className="signin_left_img" src="image/microsoft.svg" alt="" />
          </div>
        </div>
        <div className="signin_right">
          <div className="signin_right_box">
            <h1 className="signin_header">Sign In</h1>
            <input
              className="signin_username"
              type="text"
              placeholder="Username"
            ></input>
            <input
              className="signin_password"
              type="password"
              placeholder="Password"
            ></input>
            <p className="signin_forget">Forgot Password ?</p>
            <button className="signin_button">Sign in</button>
          </div>
        </div>
      </div> */}
      <Login />
    </>
  );
}

export default Signin;
