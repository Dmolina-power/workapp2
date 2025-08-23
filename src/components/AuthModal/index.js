import React from 'react';
import './style.css';
import classNames from 'classnames';

const AuthModal = ({ isOpen, onClose, children }) => {
  const modalClass = classNames({
    'modal-overlay': true,
    'is-open': isOpen,
  });

  return (
    <div className={modalClass} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default AuthModal;