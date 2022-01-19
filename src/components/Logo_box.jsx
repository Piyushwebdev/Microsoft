import React from "react";
import "./Logo_box.css";

function Logo_box(props) {
  return (
    <div className="logo_box">
      <div className="logo_img_div">
        <img className="logo_img" src={props.imageurl} alt="" />
        <p className="logo_p">{props.logoheading}</p>
      </div>
    </div>
  );
}

export default Logo_box;
