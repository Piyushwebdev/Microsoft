import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login_left">
        <img src="image/microsoft.svg" alt="" />
        <h1>Digital Awards</h1>
        <div className="login_left_box">
          <img className="login_left_bg_img" src="image/second.svg" alt="" />
        </div>
      </div>
      <div className="login_right">
        <div className="login_header">Log In</div>
        <div className="login_input">
          <input
            className="login_username"
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div className="login_input">
          <input
            className="login_password"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="login_buttons">
          <button className="login_button">Log in</button>
        </div>
        <div className="login_details">
          <span>
            <input type="checkbox" name="vehicle1" value="Bike">
              <label for="vehicle1"> Remember Me</label>
            </input>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
