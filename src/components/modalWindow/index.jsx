import React from "react";
import "./modalWindow.scss";

export class ModalWindow extends React.Component {
  render() {
    return (
      <div className="modal-window">
        <div className="modal-window-dialog">
          {this.props.children}
        </div>
      </div>
    );
  }
}