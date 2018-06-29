import * as React from "react";

import "./tasks.css";
export class TaskView extends React.Component {
    public render() {
        return (
            <div className="task">
                <div className="task-text" style={{textDecoration: this.props.singletask.done ? "line-through" : 
                "none"}}> 
                {this.props.singletask.value} </div>
                <div className="task-button">
                <button onClick={() => this.props.Click(this.props.index)}> {this.props.singletask.done ? "Undo" : "Complete" }</button>
                <button onClick={() => this.props.clickDelete(this.props.index)}>-</button>
                </div>
            </div>
        );

    }
}
