import * as React from "react";
import "./form-view.css";

export class FormView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="form">
            <form onSubmit={event => this.props.Submit(event)}>
                <input
                onChange={event => this.props.Change(event)}
                value={this.props.inputValue}
                />
            </form>
            </div>
        );
    }
}
