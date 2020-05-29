import React, { Component } from "react";
import "./TodoList.css";
import { IonTitle } from "@ionic/react";
import TodoItem from "./TodoItem/TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div className="todos animate__animated animate__fadeInUp">
        <IonTitle className="title">Things to do</IonTitle>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
