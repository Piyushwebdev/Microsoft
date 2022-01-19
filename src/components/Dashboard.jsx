import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Admin.css";
import Task from "./Task";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

function Dashboard() {
  return (
    <>
      <div className="admin_nav">
        <img className="admin_nav_img" src="image/microsoft-2.svg" alt="" />
        <h1 className="admin_nav_title">Award Manager</h1>
      </div>
      <div className="admin">
        <div className="admin_left">
          <div className="admin_left_img">
            <img src="" alt="" />
          </div>
          <div className="admin_left_text">
            <div className="admin_left_h2">Welcome</div>
            <div className="admin_left_h1">Vivekananda S</div>
          </div>
          <div className="admin_left_bottom">
            <NavLink to="/dashboard" className="link">
              <div className="admin_left_button">
                <div className="admin_left_icon">
                  <DashboardIcon style={{ fontSize: 24 }} />
                </div>
                <div>Dashboard</div>
              </div>
            </NavLink>

            <NavLink to="/awards" className="link">
              <div className="admin_left_button">
                <div className="admin_left_icon">
                  <EmojiEventsIcon style={{ fontSize: 24 }} />
                </div>
                <div>Awards</div>
              </div>
            </NavLink>
            <NavLink to="/employees" className="link">
              <div className="admin_left_button">
                <div className="admin_left_icon">
                  <PeopleAltIcon style={{ fontSize: 24 }} />
                </div>
                <div>Employees</div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="admin_right">
          <div className="admin_right_top">
            <div className="admin_right_top_left">
              <div className="admin_right_top_left_text">All Tasks(4)</div>
              <div className="form">
                <form className="example" action="/action_page.php">
                  <button type="submit">
                    <SearchIcon />
                  </button>
                  <input type="text" placeholder="Search.." name="search" />
                </form>
              </div>
            </div>
            <div className="admin_right_top_right">
              <Link to="/dashboard/task1" className="link">
                <button className="admin_right_top_right_button">
                  <div>
                    <AddIcon />
                  </div>
                  <div>Create Task</div>
                </button>
              </Link>
            </div>
          </div>
          <div className="admin_right_bottom">
            <div className="admin_right_nav">
              <div className="task_logo">Groups</div>
              <div className="task_name">AWARD NAME</div>
              <div className="task_schedule">SCEHDULE</div>
              <div className="task_status">STATUS</div>
            </div>
            <Task
              tasklogo="image/1.jpg"
              awardname="Employee Awards"
              day="Fri, Dec 9, 2021"
              time="12:20 AM"
              status="Ongoing"
            />
            <Task
              tasklogo="image/1.jpg"
              awardname="Employee Awards"
              day="Fri, Dec 9, 2021"
              time="12:20 AM"
              status="Ongoing"
            />
            <Task
              tasklogo="image/1.jpg"
              awardname="Employee Awards"
              day="Fri, Dec 9, 2021"
              time="12:20 AM"
              status="Ongoing"
            />
            <Task
              tasklogo="image/1.jpg"
              awardname="Employee Awards"
              day="Fri, Dec 9, 2021"
              time="12:20 AM"
              status="Ongoing"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
