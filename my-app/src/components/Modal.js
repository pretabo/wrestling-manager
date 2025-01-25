import React from 'react';
import './Modal.css'; // Create a CSS file for styling the modal

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="pretty-button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;