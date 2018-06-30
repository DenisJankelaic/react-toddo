import * as React from "react";
import "./button-view.css";

export class ButtonsView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="main-buttons">
                <div className="button">
                    <div className="button"><img src="https://image.freepik.com/free-icon/trash-bin-doodle-outline_318-34506.jpg"
                        alt="TrashCan" onClick={event => this.props.clearList(event)} /></div>
                    <div className="button"> <img src="https://img.freepik.com/free-icon/check-mark-doodle_318-34713.jpg?size=338&ext=jpg"
                        alt="CheckMark" onClick={event => this.props.filterDone(event)} /></div>
                    <div className="button"><img src="http://cdn.onlinewebfonts.com/svg/img_173665.png"
                        alt="Circle" onClick={event => this.props.filterUndone(event)} /></div>
                    <div className="button"><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/refresh-512.png"
                        alt="Back" onClick={event => this.props.refreshList(event)} /></div>
                </div>
            </div>
        );
    }
}
