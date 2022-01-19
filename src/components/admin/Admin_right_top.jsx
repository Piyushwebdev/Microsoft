import React from "react";
import "./Admin.css";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

function Admin_right_top(props) {
  return (
    <div className="admin_right_top">
      <div className="admin_right_top_left">
        <div className="admin_right_top_left_text">{props.taskname}</div>
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
            <Link to="/Task1" className="link">
              {props.taskbutton}
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Admin_right_top;
