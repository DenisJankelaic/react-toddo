import * as React from "react";
import "./form-view.css";

export class FormView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="form">
                <form onSubmit={event => this.props.Submit(event)} >
                    <img src="https://cdn2.iconfinder.com/data/icons/office-extras/512/List_Document-512.png"
                        alt="TaskIcon"/>
                        <input
                            onChange={event => this.props.Change(event)}
                            value={this.props.inputValue}
                            maxlength="30"
                            placeholder="Write your task here!"
                        />
            </form>
            </div>
                );
            }
        }
