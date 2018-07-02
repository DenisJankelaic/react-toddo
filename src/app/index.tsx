import * as React from "react";
import * as ReactDOM from "react-dom";
import { FormView } from "./components/form-view/form-view";
import { ListView } from "./components/list-view/list-view";
import { ButtonsView } from "./components/button-view/button-view";
import { Task } from "./components/task-view/task-interface";

import "./index.css";

interface State {
    inputValue: string;
    tasks: Task[];
    backuparray: Task[];
}

class App extends React.Component<{}, State> {
    public state: State = {
        inputValue: "",
        tasks: [],
        backuparray: []
    };

    public Change = (event: any) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    public Submit = (event: any) => {
        event.preventDefault();
        if (this.state.inputValue !== "") {
            const newTaskname = this.state.inputValue.charAt(0).toUpperCase() + this.state.inputValue.slice(1);
            if (this.state.tasks.some(x => newTaskname === x.value)) {
                this.setState({
                    inputValue: ""
                });
            } else {
                const newTask = {
                    value: newTaskname,
                    done: false
                };
                const newtasklist = this.state.tasks;
                newtasklist.push(newTask);
                this.setState({
                    tasks: newtasklist,
                    backuparray: newtasklist,
                    inputValue: ""
                });

            }
        } else {
            this.setState({
                inputValue: ""
            });
        }
    }

    public Click = (index: number) => {
        const tasks = this.state.tasks;
        tasks[index].done = !tasks[index].done;
        this.setState({
            tasks
        });
    }

    public clickDelete = (index: number) => {
        const tasks = this.state.tasks;
        tasks.splice(index, 1);
        this.setState({
            tasks: tasks
        });
    }
    public clearList = () => {
        const tasks = this.state.tasks;
        tasks.splice(0, tasks.length);
        this.setState({
            tasks: tasks
        });
    }

    public filterDone = () => {
        let tasks = this.state.backuparray;
        tasks = tasks.filter(x => (x.done === true));
        this.setState({
            tasks: tasks
        });
    }

    public filterUndone = () => {
        let tasks = this.state.backuparray;
        tasks = tasks.filter(x => (x.done === false));
        this.setState({
            tasks: tasks
        });
    }

    public refreshList = () => {
        this.setState({
            tasks: this.state.backuparray
        });
    }
    public render(): JSX.Element {
        return (
            <div className="todolist">
                <div className="wrapper">
                    <div className="title">
                        To do list
                </div>
                    <div className="buttons">
                        <ButtonsView
                            clearList={this.clearList}
                            filterDone={this.filterDone}
                            filterUndone={this.filterUndone}
                            refreshList={this.refreshList}
                        />
                    </div>
                    <div className="input">
                        <FormView
                            Change={this.Change}
                            inputValue={this.state.inputValue}
                            Submit={this.Submit}
                        />
                    </div>

                    <ListView
                        Click={this.Click}
                        clickDelete={this.clickDelete}
                        tasks={this.state.tasks}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
