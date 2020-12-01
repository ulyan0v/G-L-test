import React from "react";
import "./modal-window.scss";

export class ModalWindow extends React.Component {
  render() {
    const { open, title, onClose, children } = this.props;

    if (!open) {
      return null;
    }

    return (
      <div className="modal-window">
        <div className="modal-window-dialog">
          <div className="modal-window-header">
            <h3>{title}</h3>
            <button onClick={onClose}>&times;</button>
          </div>
          {children}
        </div>
      </div>
    );
  }
}