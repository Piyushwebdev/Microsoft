import React from "react";
import "./Admin.css";
import "./Employees.css";
import Admin_nav from "./admin/Admin_nav";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import Admin_left from "./admin/Admin_left";
import Employees_groups from "./admin/Employees_groups";

function Employees() {
  return (
    <>
      <Admin_nav />
      <div className="employees">
        <Admin_left />
        <div className="admin_right">
          <div className="admin_right_top">
            <div className="admin_right_top_left">
              <div className="admin_right_top_left_text">Employees</div>
              <div className="form">
                <form className="example" action="/action_page.php">
                  <button className="example_button" type="submit">
                    <SearchIcon />
                  </button>
                  <input
                    classNmae="example_input"
                    type="text"
                    placeholder="Search.."
                    name="search"
                  />
                </form>
              </div>
            </div>
            <div className="admin_right_top_right">
              <button className="admin_right_top_right_button">
                <div>
                  <AddIcon />
                </div>
                <div>
                  <Link to="/" className="link">
                    Export CSV
                  </Link>
                </div>
              </button>
              <button className="admin_right_top_right_button">
                <div>
                  <AddIcon />
                </div>
                <div>
                  <Link to="/" className="link">
                    Add Email
                  </Link>
                </div>
              </button>
            </div>
          </div>
          <div className="employees_bottom">
            <Employees_groups no="1." groupname="Group1" />
            <Employees_groups no="2." groupname="Group2" />
            <Employees_groups no="3." groupname="Group3" />
            <Employees_groups no="4." groupname="Group4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Employees;
