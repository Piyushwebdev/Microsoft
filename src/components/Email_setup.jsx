import React, { useState } from "react";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AddIcon from "@material-ui/icons/Add";
import "./Email_setup.css";

function Email_setup() {
  const [data, setData] = useState(null);
  function getData(val) {
    setData(val.target.value);
  }
  return (
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
                <button className="email_to_div">
                  <GroupAddIcon className="email_to_icon" />
                </button>
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
            placeholder="Type of your message here"
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
  );
}

export default Email_setup;
