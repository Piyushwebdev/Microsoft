import React from "react";
import Admin_nav from "./admin/Admin_nav";
import Admin_left from "./admin/Admin_left";
import Admin_right_top from "./admin/Admin_right_top";
import AddIcon from "@material-ui/icons/Add";
import "./Award.css";
import Logo_box from "./Logo_box";
function Award() {
  return (
    <>
      <Admin_nav />
      <div className="award">
        <Admin_left />
        <div className="award_right">
          <Admin_right_top taskname="Awards" taskbutton="Upload Image" />
          <div className="award_hr">
            <hr />
          </div>
          <div className="logo_section">
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <Logo_box imageurl="image/1.jpg" logoheading="Lets go piyush" />
            <div className="logo_box">
              <div className="logo_img_div">
                <div>
                  <AddIcon className="logo_icon" />
                </div>
                <h1 className="logo_h1">Add Logo</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Award;
