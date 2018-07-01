import * as React from "react";

import { TaskView } from "./task";

export class ListView extends React.Component {

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
