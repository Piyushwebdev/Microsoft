import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./Schedule.css";
import "react-datepicker/dist/react-datepicker.css";
function Schedule() {
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minutes = Array.from(Array(60).keys());
  const hour = hours.map((hour) => <option>{hour}</option>);
  const minute = minutes.map((minute) => <option>{minute}</option>);
  const [startDate, setStartDate] = useState(new Date());

  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="schedule">
      <form>
        <div className="schedule_div">
          <div className="schedule_text">Time Zone</div>
          <div className="schedule_select_div">
            <select
              className="schedule_select"
              value={value}
              onChange={handleChange}
            >
              <option value="IST">IST</option>
              <option value="UTC">UTC</option>
            </select>
          </div>
        </div>
        <div className="schedule_div">
          <div className="schedule_text">Time</div>
          <div className="schedule_select1_div">
            <select
              className="schedule_select1"
              value={value}
              onChange={handleChange}
            >
              {hour}
            </select>
          </div>
          <div className="schedule_select2_div">
            <select
              className="schedule_select2"
              value={value}
              onChange={handleChange}
            >
              {minute}
            </select>
          </div>
          <div className="schedule_select3_div">
            <select
              className="schedule_select3"
              value={value}
              onChange={handleChange}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        <div className="schedule_div">
          <div className="schedule_text">Date</div>
          <div className="schedule_select_div">
            <DatePicker
              style={{ width: "350" }}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Schedule;
