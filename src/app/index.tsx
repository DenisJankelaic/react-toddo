import * as React from "react";
import * as ReactDOM from "react-dom";
import { FormView } from "./components/form-view";
import { ListView } from "./components/list-view";

import "./index.css";

class App extends React.Component {

    public state = {
        inputValue: "",
        tasks: []
    };

    public Change = event => {
        this.setState({
            inputValue: event.target.value
        });
    }

    public Submit = event => {
        event.preventDefault();
        const newTask = {
            value: this.state.inputValue,
            done: false
        };
        const newtasklist = this.state.tasks;
        newtasklist.push(newTask);
        this.setState({
            tasks: newtasklist,
            inputValue: ""
        });
    }

    public Click = index => {
        const tasks = this.state.tasks;
        tasks[index].done = !tasks[index].done;
        this.setState({
            tasks
        });
    }

    public clickDelete = index => {
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
    public render(): JSX.Element {
        return (
            <div className="todolist">
            <div className="wrapper">
                <div className="title">
                    To do list
                </div>
                <div className="buttons">
                <button>
                    <img src="https://cdn3.iconfinder.com/data/icons/computer-network-icons/512/Trash_Bin-512.png" 
                    alt="TrashCan" onClick={this.clearList}/></button>
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
