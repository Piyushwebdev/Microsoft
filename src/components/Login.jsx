import React from "react";
import "./Login.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login_left">
        <img className="login_logo" src="image/microsoft.svg" alt="" />
        <h1 className="login_left_header">Digital Awards</h1>
        <div className="login_left_box">
          <img className="login_left_bg_img" src="image/second.svg" alt="" />
        </div>
      </div>
      <div className="login_right">
        <div className="login_right_box">
          <div className="login_header">Log In</div>
          <div className="login_input">
            <div className="login_input_svg">
              <AccountBoxIcon />
            </div>
            <div className="login_input_box">
              <input
                className="login_username"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="login_input">
            <div className="login_input_svg">
              <LockIcon />
            </div>
            <div className="login_input_box">
              <input
                className="login_password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="login_buttons">
            <button className="login_button">
              <Link className="link" to="/dashboard">
                Log in
              </Link>
            </button>
          </div>
          <div className="login_details">
            <span>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <label for="vehicle1"> Remember Me</label>
            </span>
            <span>Forgot Password?</span>
          </div>
        </div>
        <div className="login_footer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis
          sem suscipit est accumsan varius. Sed ante ante, sodales et lorem
          sollicitudin, sodales lobortis ligula.
        </div>
      </div>
    </div>
  );
}

export default Login;
