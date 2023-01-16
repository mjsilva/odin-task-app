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
      },
      tasks: [
        {
          id: "1",
          text: "Sample Task",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.onClickTaskDelete = this.onClickTaskDelete.bind(this);
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
      },
    });
  }

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  }

  onClickTaskDelete(e, taskId) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
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
          <button className="addTaskBto" onClick={this.onSubmitTask}>+</button>
        </div>
        <Overview tasks={tasks} onClickTaskDelete={this.onClickTaskDelete} />
      </div>
    );
  }
}

export default App;
