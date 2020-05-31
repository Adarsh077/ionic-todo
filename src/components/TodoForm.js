import React, { Component } from "react";
import {
  IonInput,
  IonItem,
  IonDatetime,
  IonLabel,
} from "@ionic/react";
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task || "",
      note: props.note || "",
      date: props.date || "",
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value)
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    this.props.handleModalHide();
    this.props.handleSubmit(this.state)
  }

  render() {
    const { date, note, task } = this.state;
    return <React.Fragment>
      <div className="form">

        <IonInput
          type="text"
          className="form-item click_animation"
          placeholder="Enter Task"
          value={task}
          name="task"
          onIonChange={this.handleChange}
        ></IonInput>

        <IonInput
          className="form-item click_animation"
          type="text"
          placeholder="Note"
          value={note}
          name="note"
          onIonChange={this.handleChange}
        ></IonInput>

        <IonItem className="form-item click_animation">
          <IonLabel>DD/MM/YYYY</IonLabel>
          <IonDatetime displayFormat="DD MM YYYY"
            value={date}
            name="date"
            onIonChange={this.handleChange}
          ></IonDatetime>
        </IonItem>

      </div>

      <div
        className="addtodo-btn click_animation"
        onClick={this.handleSubmit}
      >
        Save Task
      </div>
    </React.Fragment>
  }
}

export default TodoForm;