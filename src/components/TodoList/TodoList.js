import React, { Component } from "react";
import { IonTitle } from "@ionic/react";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import TodoModal from "../TodoModal/TodoModal";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      idx: null,
    };
  }

  closeModal = () => this.setState({ showModal: false });

  editTodo = (idx) => this.setState({ showModal: true, idx });

  handleSubmit = (todo) => {
    this.props.editTodo(this.state.idx, todo);

    this.setState({ showModal: false, idx: null });
  };

  render() {
    const { todos, deleteTodo } = this.props;
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <div className="todos animate__animated animate__fadeInUp">
          <IonTitle className="title">Things to do</IonTitle>
          {todos.map((todo, idx) => (
            <TodoItem
              key={uuid()}
              {...todo}
              editTodo={() => this.editTodo(idx)}
              deleteTodo={() => deleteTodo(idx)}
            />
          ))}
        </div>
        {showModal && (
          <TodoModal
            title="Edit Task"
            todo={todos[this.state.idx]}
            handleModalHide={this.closeModal}
            handleSubmit={this.handleSubmit}
          />
        )}
      </React.Fragment>
    );
  }
}

export default TodoList;
