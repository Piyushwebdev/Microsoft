import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

function Admin_left() {
  return (
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
  );
}

export default Admin_left;
