import React from "react";
import "./Admin.css";

function Task(props) {
  return (
    <div className="task">
      <div className="task_logo">
        <img className="task_logo_img" src={props.tasklogo} alt="" />
      </div>
      <div className="task_name">
        <h1 className="task_name_h1">{props.awardname}</h1>
      </div>
      <div className="task_schedule">
        <p className="task_schedule_p">{props.day}</p>
        <p className="task_schedule_p">{props.time}</p>
      </div>
      <div className="task_status">{props.status}</div>
    </div>
  );
}

export default Task;
