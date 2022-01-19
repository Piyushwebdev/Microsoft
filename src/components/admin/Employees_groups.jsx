import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Employees_chart from "./Employees_chart";
import "./Employees_groups.css";
function Employees_groups(props) {
  return (
    <div className="group">
      <div className="employees_groups">
        <div className="group_no">{props.no}</div>
        <div className="group_name">{props.groupname}</div>
        <div className="group_icon">
          <button className="group_icon_buton">
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
      <div className="group_popup">
        <div className="employees_chart_head">
          <div className="chart1"></div>
          <div className="chart2">People</div>
          <div className="chart3">Name</div>
          <div className="chart4">Email</div>
          <div className="chart5"></div>
        </div>
        <Employees_chart />
        <Employees_chart />
        <Employees_chart />
        <Employees_chart />
      </div>
    </div>
  );
}

export default Employees_groups;
