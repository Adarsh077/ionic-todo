import React, { Component } from "react";
import { add } from "ionicons/icons";
import "./AddTodo.css";
import { IonIcon } from "@ionic/react";
import TodoModal from "../TodoModal/TodoModal";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showBounceout: false,
    };
  }

  closeModal = () => this.setState({ showModal: false });

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <div className="addtodo-btn animate_click">
          <div
            className="btn"
            onClick={() => this.setState({ showModal: true })}
          >
            <IonIcon icon={add} />
            <h6>Add Task</h6>
          </div>
        </div>
        {showModal && (
          <TodoModal
            title="Create a new Task"
            handleSubmit={this.props.handleSubmit}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default AddTodo;
