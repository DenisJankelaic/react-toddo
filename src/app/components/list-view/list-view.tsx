import * as React from "react";

import { TaskView } from "../task-view/task";
import { Task } from "../task-view/task-interface";

interface Props {
    Click: (index: number) => void;
    clickDelete: (index: number) => void;
    tasks: Task[];
}

export class ListView extends React.Component<Props> {

    public render(): JSX.Element {
        return (
            <div className="list">
                {this.props.tasks.map((singletask, i) =>
                    (
                        <TaskView
                            key={i}
                            index={i}
                            Click={this.props.Click}
                            clickDelete={this.props.clickDelete}
                            singletask={singletask}
                        />
                    ))}
            </div>
        );
    }
}
