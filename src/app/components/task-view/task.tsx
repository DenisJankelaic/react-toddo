import * as React from "react";

import { Task } from "./task-interface";

import "./tasks.css";

interface Props {
    Click: (index: number) => void;
    clickDelete: (index: number) => void;
    index: number;
    singletask: Task;
}

export class TaskView extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="task">
                <div className="task-text" style={{textDecoration: this.props.singletask.done ? "line-through" :
                "none"}}>
                {this.props.singletask.value} </div>
                <div className="task-button">
                <div className="button"><button onClick={() => this.props.Click(this.props.index)}>
                {this.props.singletask.done ? "Undo" : "Complete" }</button></div>
                <div className="button"><button onClick={() => this.props.clickDelete(this.props.index)}>-</button></div>
                </div>
            </div>
        );

    }
}
