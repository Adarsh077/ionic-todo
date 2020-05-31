import React, { Component } from "react";
import "./TodoItem.css";
import TodoIcon from "./icons/todo.svg";

class TodoItem extends Component {

  constructor() {
    super();
    this.state = {
      deleteAnimation: false,
    }
  }

  deleteTodo = () => {
    this.setState({ deleteAnimation: true })
    setTimeout(this.props.deleteTodo, 650)
  }

  render() {
    const { task, note, editTodo } = this.props;
    const { deleteAnimation } = this.state;
    return (
      <div className={`todo-item click_animation animate__animated ${deleteAnimation ? 'animate__fadeOut' : 'animate__fadeUp'}`}>
        <div className="icon" onClick={this.deleteTodo}>
          <img src={TodoIcon} alt="done" width="100%" height="100%" />
        </div>
        <div className="label" onClick={editTodo}>
          <span>{task}</span>
          <div className="note">
            {note}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
