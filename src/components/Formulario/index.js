import React, { Fragment } from 'react';

const Formulario = ({ className, arrayData, type, name, value}) => (
 
  <Fragment>
    <form className={className}>
      {arrayData.map(({ id, commonIdentifier }) => (
        <div className="input__form"key={id}> 
        <input required type={type} value={value} name={name}></input>
        <label>{commonIdentifier}</label>
        </div>
      ))}
    </form>
  </Fragment>
);

export default Formulario;
