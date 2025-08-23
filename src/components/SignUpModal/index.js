import React from 'react';
import './style.css';
import SignIn from '../../components/SignIn/';
import classNames from 'classnames'; 



const SignUpModal = ({ onClose }) => {
    const modalClass = classNames({
      'modal-overlay': true,
      'is-open': true,
    });
  
    return (
      <div className={modalClass} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {/* Delete this entire line to remove the close button */}
          {/* <button className="modal-close" onClick={onClose}>
            &times;
          </button> */}
          <SignIn onClose={onClose} />
        </div>
      </div>
    );
  };
  

export default SignUpModal;




