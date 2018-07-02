import * as React from "react";
import "./form-view.css";

interface Props {
    Change: (event: any) => void;
    inputValue: string;
    Submit: (event: any) => void;
}

export class FormView extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="form">
                <form onSubmit={event => this.props.Submit(event)} >
                    <img src="https://cdn2.iconfinder.com/data/icons/office-extras/512/List_Document-512.png"
                        alt="TaskIcon" />
                    <input
                        onChange={event => this.props.Change(event)}
                        value={this.props.inputValue}
                        placeholder="Write your task here!"
                        maxLength="30"
                    />
                </form>
            </div>
        );
    }
}
