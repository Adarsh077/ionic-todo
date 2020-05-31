import React, { Component } from "react";
import { v4 as uuid } from "uuid"
import { IonTitle } from "@ionic/react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    const { todos, deleteTodo } = this.props;
    return (
      <div className="todos animate__animated animate__fadeInUp">
        <IonTitle className="title">Things to do</IonTitle>
        {todos.map((todo, idx) => <TodoItem key={uuid()} {...todo} deleteTodo={() => console.log('as') || deleteTodo(idx)} />)}
      </div>
    );
  }
}

export default TodoList;
