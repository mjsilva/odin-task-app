import { Component } from "react";

class Overview extends Component {

  render() {
    const tasks = this.props.tasks;
    return (
      <div className="taskList">
        {tasks.reverse().map((task) => {
          return (
            <div className="taskContainer" key={"taskContainer-" + task.id}>
              <div className="task" key={"task-" + task.id}>
                {task.text}
              </div>
              <span
                onClick={(event) => this.props.onClickTaskDelete(event, task.id)}
                className="taskDelete material-symbols-outlined"
                key={"taskDelete-" + task.id}
              >
                delete
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Overview;
