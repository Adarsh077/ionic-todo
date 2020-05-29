import React, { Component } from "react";
import "./TodoItem.css";
import TodoIcon from "./icons/todo.svg";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item click_animation">
        <div className="icon">
          <img src={TodoIcon} alt="done" width="100%" height="100%" />
        </div>
        <div className="label">
          <span>Buy a bread</span>
          <div className="note">
            Buy this brad from the backery and not from other stores
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
