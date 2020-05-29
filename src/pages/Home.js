import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { DateBar, TodoList, AddTodo } from "../components";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonContent className="app">
        <div className="ion-padding">
          <DateBar />
          <TodoList />
        </div>
        <AddTodo />
      </IonContent>
    </IonPage>
  );
};

export default Home;
