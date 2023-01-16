import { Component } from "react";

class Overview extends Component {
  render(props) {
    const tasks = this.props.tasks;
    return (
      <div className="taskList">
        {tasks.map((task) => {
          return <div className="task" key={task.id}>{task.text}</div>;
        })}
      </div>
    );
  }
}

export default Overview;
