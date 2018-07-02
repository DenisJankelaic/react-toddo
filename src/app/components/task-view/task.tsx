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
            <div className="task" >
                <div className="task-text" onClick={() => this.props.Click(this.props.index)}
                style={{textDecoration: this.props.singletask.done ? "line-through" :
                "none"}}>
                {this.props.singletask.value} </div>
                <div className="task-button">
                <div className="button"><img src="https://www.freeiconspng.com/uploads/black-x-png-27.png"
                onClick={() => this.props.clickDelete(this.props.index)}/></div>
                </div>
            </div>
        );

    }
}
