import React, { Component } from "react";
import { add } from "ionicons/icons";
import "./AddTodo.css";
import {
  IonIcon,
  IonTitle,
  IonInput,
  IonItem,
  IonDatetime,
  IonLabel,
} from "@ionic/react";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showBounceout: false,
    };
  }

  handleModalHide = () => {
    this.setState({ showBounceout: true });
    setTimeout(
      () => this.setState({ showModal: false, showBounceout: false }),
      500
    );
  };
  render() {
    const { showModal, showBounceout } = this.state;
    return (
      <div>
        <div className="addtodo-btn click_animation">
          <div
            className="btn"
            onClick={() => this.setState({ showModal: true })}
          >
            <IonIcon icon={add} />
            <h6>Add Task</h6>
          </div>
        </div>
        {showModal && (
          <div className="addtodo-modal-container">
            <div className="addtodo-container">
              <div className="backdrop" onClick={this.handleModalHide}></div>
              <div
                className={`addtodo-modal animate__animated ${
                  showBounceout
                    ? "animate__bounceOutDown"
                    : "animate__bounceInUp"
                }`}
              >
                <IonTitle className="title">Create a new Task</IonTitle>
                <div className="form">
                  <IonInput
                    className="form-item click_animation"
                    type="text"
                    placeholder="Enter Task"
                  ></IonInput>
                  <IonInput
                    className="form-item click_animation"
                    type="text"
                    placeholder="Note"
                  ></IonInput>
                  <IonItem className="form-item click_animation">
                    <IonLabel>DD/MM/YYYY</IonLabel>
                    <IonDatetime displayFormat="DD MM YYYY"></IonDatetime>
                  </IonItem>
                </div>
                <div
                  className="addtodo-btn click_animation"
                  onClick={this.handleModalHide}
                >
                  Save Task
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AddTodo;
