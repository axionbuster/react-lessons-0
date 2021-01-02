import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

Modal.propTypes = {
  modalContent: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
