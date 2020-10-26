import React, { Component } from "react";
import { IonTitle, IonInput, IonTextarea } from "@ionic/react";
import "./TodoModal.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBounceout: false,
      task: props.todo?.task,
      note: props.todo?.note,
    };
  }

  handleModalHide = () => {
    this.setState({ showBounceout: true });
    setTimeout(this.props.closeModal, 500);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.handleModalHide();
    setTimeout(() => this.props.handleSubmit(this.state), 500);
  };

  render() {
    const { showBounceout, task, note } = this.state;
    return (
      <div className="addtodo-modal-container">
        <div className="addtodo-container">
          <div className="backdrop" onClick={this.handleModalHide}></div>
          <div
            className={`addtodo-modal animate__animated ${
              showBounceout ? "animate__bounceOut" : "animate__bounceIn"
            }`}
          >
            <IonTitle className="title">{this.props.title}</IonTitle>
            <div className="form">
              <IonInput
                type="text"
                className="form-item animate_click"
                placeholder="Enter Task"
                value={task}
                name="task"
                onIonChange={this.handleChange}
              ></IonInput>

              <IonTextarea
                className="form-item animate_click"
                type="text"
                placeholder="Note"
                value={note}
                name="note"
                rows="6"
                onIonChange={this.handleChange}
              ></IonTextarea>
            </div>

            <div
              className="addtodo-btn animate_click"
              onClick={this.handleSubmit}
            >
              Save Task
            </div>
          </div>
        </div>
      </div>
    );
  }
}
