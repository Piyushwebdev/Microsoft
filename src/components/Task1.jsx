import React from "react";
import { Link } from "react-router-dom";
import "./Task.css";
import Footer_button from "./admin/Footer_button";
import Logo_box from "./Logo_box";
import Admin_nav from "./admin/Admin_nav";
import Admin_left from "./admin/Admin_left";
import Setup from "./admin/Setup";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

function Task1() {
  return (
    <>
      <Admin_nav />
      <div className="admin">
        <Admin_left />
        <div className="task_right">
          <Setup />
          <div className="select">
            <div className="select_text">Select Award</div>
            <div className="select_form_div">
              <form className="select_form" action="/">
                <button className="select_form_button" type="submit">
                  <SearchIcon className="select_form_icon" />
                </button>
                <input
                  className="select_form_input"
                  type="text"
                  placeholder="Search.."
                  name="search"
                />
              </form>
            </div>
            <div className="select_button_div">
              <button className="select_button">
                <div>
                  <AddIcon className="select_button_icon" />
                </div>
                <div>Upload Image</div>
              </button>
            </div>
          </div>
          <div className="logo_section">
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
          </div>
          <div className="footer_button">
            <span>
              <button className="footer_button1">
                <Link to="/dashboard" className="link">
                  Cancel
                </Link>
              </button>
            </span>
            <span>
              <button className="footer_button2">
                <Link to="/dashboard/task2" className="link">
                  Next
                </Link>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task1;
