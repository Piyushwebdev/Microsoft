import React from "react";
import { Link } from "react-router-dom";
import "./Task.css";
import Admin_nav from "./admin/Admin_nav";
import Admin_left from "./admin/Admin_left";
import Setup from "./admin/Setup";
import Email_setup from "./Email_setup";
import Schedule from "./admin/Schedule";
import Popup from "./admin/Popup";

function Task3() {
  return (
    <>
      <Admin_nav />
      <div className="admin">
        <Admin_left />
        <div className="task_right">
          <Setup />
          <Schedule />
          <div className="footer_button">
            <span>
              <button className="footer_button1">
                <Link to="/dashboard/task2" className="link">
                  Cancel
                </Link>
              </button>
            </span>

            <span>
              <button className="footer_button2">
                <Link to="/dashboard/task1" className="link">
                  Send Now
                </Link>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task3;
