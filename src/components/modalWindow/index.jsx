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
            <h3 className="modal-window-header-title">
              {title}
            </h3>
            <button
              className="modal-window-header-button"
              onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-window-body">
            {children}
          </div>
        </div>
      </div>
    );
  }
}