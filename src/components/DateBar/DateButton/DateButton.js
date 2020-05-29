import React, { Component } from "react";
import "./DateButton.css";

class DateButton extends Component {
  render() {
    return (
      <div
        className={`date-btn click_animation ${
          this.props.isActive && "active"
        }`}
      >
        <div className="date">6</div>
        <div className="day">Mon</div>
      </div>
    );
  }
}

export default DateButton;
