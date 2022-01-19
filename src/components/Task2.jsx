import React, { useState } from "react";
import { Link } from "react-router-dom";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AddIcon from "@material-ui/icons/Add";
import "./Task.css";
import "./Email_setup.css";
import Admin_nav from "./admin/Admin_nav";
import Admin_left from "./admin/Admin_left";
import Setup from "./admin/Setup";
import Popup from "./admin/Popup";

function Task2() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  function getData(val) {
    setData(val.target.value);
  }
  return (
    <>
      <Admin_nav />
      <div className="admin">
        <Admin_left />
        <div className="task_right">
          <Setup />
          <div className="email_setup">
            <div className="email_setup_top">
              <div className="email_to">
                <div className="email_to_h1">To</div>
                <div>
                  <div className="email_form">
                    <div>
                      <input className="email_to_input" type="text" />
                    </div>
                    <div>
                      <button
                        className="email_to_div"
                        onClick={() => setOpen(true)}
                      >
                        <GroupAddIcon className="email_to_icon" />
                      </button>
                      <Popup trigger={open} setTrigger={setOpen} />
                    </div>
                    <div>
                      <button className="email_to_div">
                        <AddIcon className="email_to_icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="email_to">
                <div className="email_to_h1">Subject</div>
                <div>
                  <input className="email_from_input" type="text" />
                </div>
              </div>
              <div className="email_to">
                <div className="email_to_h1">From</div>
                <div>
                  <input className="email_from_input" type="text" />
                </div>
              </div>
            </div>
            <div className="email_setup_bottom">
              <div className="email_setup_input_div">
                <input
                  className="email_setup_input"
                  type="text"
                  maxLength={100}
                  placeholder="Type of your message here"
                  onChange={getData}
                />
              </div>
              <div className="email_setup_faketext">
                <p>{data}</p>
              </div>
              <div className="email_login_link">
                <button className="email_login_link_button">
                  Click to login & accept award
                </button>
              </div>
            </div>
          </div>

          <div className="footer_button">
            <span>
              <button className="footer_button1">
                <Link to="/dashboard/task1" className="link">
                  Cancel
                </Link>
              </button>
            </span>
            <span>
              <button className="footer_button2">
                <Link to="/dashboard/task3" className="link">
                  Next
                </Link>
              </button>
            </span>
            <span>
              <button className="footer_button3">
                <Link to="/dashboard/task2" className="link">
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

export default Task2;
