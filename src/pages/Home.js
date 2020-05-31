import { IonContent, IonPage } from "@ionic/react";
import React, { Component } from "react";
import { DateBar, TodoList, AddTodo } from "../components";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{ task: "Buy a bread", note: "Some note", date: "May" }]
    }
  }

  addTodo = newTodo => {
    const todos = Array.from(this.state.todos);
    todos.push(newTodo);
    this.setState({ todos });
  }

  editTodo = (idx, newTodo) => {
    const todos = Array.from(this.state.todos);
    todos[idx] = { ...todos[idx], newTodo };
    this.setState({ todos });
  }

  deleteTodo = (idx) => {
    console.log(idx)
    const todos = Array.from(this.state.todos);
    todos.splice(idx, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <IonPage>
        <IonContent className="app">
          <div className="ion-padding">
            <DateBar />
            <TodoList todos={this.state.todos} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />
          </div>
          <AddTodo label="Create a new task" handleSubmit={this.addTodo} />
        </IonContent>
      </IonPage>
    );
  }
};

export default Home;