import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: "",
        id: uniqid(),
        done: false,
      },
      tasks: [
        {
          id: "1",
          text: "Sample Task",
          done: false,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.onClickTaskDelete = this.onClickTaskDelete.bind(this);
    this.onClickTaskDone = this.onClickTaskDone.bind(this);
  }

  onSubmitTask() {
    if (!this.state.task.text) {
      return;
    }
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
        done: false,
      },
    });
  }

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        done: false,
      },
    });
  }

  onClickTaskDelete(e, taskId) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    });
  }

  onClickTaskDone(e, task) {
    this.setState({
      tasks: this.state.tasks.map(
        function (elTask) {
          if (elTask.id === this.clickedTask.id) {
            elTask.done = !this.clickedTask.done;
          }

          return elTask;
        },
        { clickedTask: task }
      ),
    });
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div className="app">
        <h1>React Todo App</h1>
        <div className="addTask">
          <input
            type="text"
            id="inputTask"
            name="inputTask"
            value={task.text}
            onChange={this.handleChange}
            placeholder="Add your new todo"
          />
          <button className="addTaskBto" onClick={this.onSubmitTask}>
            +
          </button>
        </div>
        <Overview
          tasks={tasks}
          onClickTaskDelete={this.onClickTaskDelete}
          onClickTaskDone={this.onClickTaskDone}
        />
      </div>
    );
  }
}

export default App;
