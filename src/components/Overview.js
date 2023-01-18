import { Component } from "react";

class Overview extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <div className="taskList">
        {tasks.map((task) => {
          return (
            <div className={`taskContainer ${task.done ? "strikethrough" : ""}`} key={"taskContainer-" + task.id}>
              <div className="taskDoneContainer">
                <div
                  className={`taskDone ${task.done ? "checked" : ""}`}
                  key={"taskDone-" + task.id}
                  onClick={(event) =>
                    this.props.onClickTaskDone(event, task)
                  }
                ></div>
              </div>
              <div className="task" key={"task-" + task.id}>
                {task.text}
              </div>
              <div
                onClick={(event) =>
                  this.props.onClickTaskDelete(event, task.id)
                }
                className="taskDelete material-symbols-outlined"
                key={"taskDelete-" + task.id}
              >
                delete
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Overview;
