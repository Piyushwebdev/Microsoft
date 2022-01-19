import React, { useState } from "react";
import "./Popup.css";
import CloseIcon from "@material-ui/icons/Close";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup_scroll">
        <div className="popup_head">
          <div className="popup_head_text">Add to group</div>
          <div className="popup_head_icon">
            <button
              className="popop_head_close_icon"
              onClick={() => props.setTrigger(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="popup_group">Goup1</div>
        <div className="popup_group">Goup2</div>
        <div className="popup_group">Goup3</div>
        <div className="popup_group">Goup4</div>
        <div className="popup_group">Goup5</div>
        <div className="popup_group">Goup6</div>
        <div className="popup_group">Goup7</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
