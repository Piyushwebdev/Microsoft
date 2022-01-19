import React from "react";
import { NavLink } from "react-router-dom";
import "./Setup.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function Setup() {
  return (
    <div className="setup">
      <div className="setup_top">
        <span className="setup_span1">Create Task</span>
        <span className="setup_span2">
          <ArrowRightIcon />
        </span>
        <span className="setup_span3">Task Setup</span>

        <span className="setup_span4">
          <input
            className="setup_span4_input"
            type="text"
            placeholder="Enter Text Here"
            name="search"
          />
        </span>
      </div>
      <div className="setup_bottom">
        <span className="setup_span5 active">
          <NavLink className="link" to="/dashboard/task1">
            Award Setup
          </NavLink>
        </span>
        <span className="setup_span5 active">
          <NavLink className="link" to="/dashboard/task2">
            Email Setup
          </NavLink>
        </span>
        <span className="setup_span5 active">
          <NavLink className="link" to="/dashboard/task3">
            Schedule
          </NavLink>
        </span>
      </div>
    </div>
  );
}

export default Setup;
