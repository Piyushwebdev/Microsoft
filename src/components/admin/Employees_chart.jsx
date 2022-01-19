import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Employees_groups.css";

function Employees_chart(props) {
  return (
    <div className="employees_chart">
      <div className="chart_checkbox">
        <input type="checkbox" />
      </div>
      <div className="chart_people">
        <div className="chart_people_img_div"></div>
        <img
          className="chart_people_img"
          src="`image/{props.image}.jpg`"
          alt=""
        />
      </div>
      <div className="chart_name">{props.name}</div>
      <div className="chart_email">{props.email}</div>
      <div className="chart_edit">
        <EditIcon />
      </div>
      <div className="chart_delete">
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Employees_chart;
