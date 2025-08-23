import React from 'react';
import './style.css';
import Signup from '../../components/SignIn/'; // Import the existing Signup component

const SignUpModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <Signup />
      </div>
    </div>
  );
};

export default SignUpModal;