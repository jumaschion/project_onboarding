import './index.css';

import React from 'react';

const Modal = ({ handleClose, show, children, name, value, className }) => {
  const showHideModal= show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideModal}>
      <section className="modal-main">
        {children}
        <input placeholder="Currency" className="input__modal" type='text' value={value} name={name}></input>
        <input placeholder="Suggested" className="input__modal" type='text' value={value} name={name}></input>
        <button className="btn__close" onClick={handleClose}>close</button>
      </section>
    </div> 
  );
};

export default Modal;