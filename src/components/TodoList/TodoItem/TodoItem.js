import React, { Component } from "react";
import "./TodoItem.css";
import TodoIcon from "./icons/todo.svg";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      deleteAnimation: false,
    };
  }

  deleteTodo = () => {
    this.setState({ deleteAnimation: true });
    setTimeout(this.props.deleteTodo, 700);
  };

  render() {
    const { task, note, editTodo } = this.props;
    const deleteAnimation = this.state.deleteAnimation && "animate__fadeOut";

    return (
      <div className={`todo-item  animate__animated ${deleteAnimation}`}>
        <div className="icon" onClick={this.deleteTodo}>
          <img src={TodoIcon} alt="done" width="100%" height="100%" />
        </div>
        <div className="label animate_click" onClick={editTodo}>
          <span>{task}</span>
          {note && <div className="note">{note}</div>}
        </div>
      </div>
    );
  }
}

export default TodoItem;
