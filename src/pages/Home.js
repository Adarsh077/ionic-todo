import { IonContent, IonPage } from "@ionic/react";
import React, { Component } from "react";
import { TodoList, AddTodo } from "../components";
import "./Home.css";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.getTodos();
  }

  getTodos = async () => {
    const ret = await Storage.get({ key: "todos" });
    this.setState({ todos: JSON.parse(ret.value) || [] });
  };

  setTodos = async () => {
    await Storage.set({
      key: "todos",
      value: JSON.stringify(this.state.todos),
    });
  };

  addTodo = (newTodo) => {
    const todos = Array.from(this.state.todos);
    todos.push(newTodo);
    this.setState({ todos }, this.setTodos);
  };

  editTodo = (idx, newTodo) => {
    const todos = Array.from(this.state.todos);
    todos[idx] = { ...todos[idx], ...newTodo };
    this.setState({ todos }, this.setTodos);
  };

  deleteTodo = (idx) => {
    const todos = Array.from(this.state.todos);
    todos.splice(idx, 1);
    this.setState({ todos }, this.setTodos);
  };

  render() {
    return (
      <IonPage>
        <IonContent className="app">
          <div className="ion-padding">
            <TodoList
              todos={this.state.todos}
              editTodo={this.editTodo}
              deleteTodo={this.deleteTodo}
            />
          </div>
          <AddTodo label="Create a new task" handleSubmit={this.addTodo} />
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
