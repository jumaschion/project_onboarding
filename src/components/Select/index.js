import './index.css';

import React, { Fragment } from 'react';

const Select = ({ className, arrayData, type, name, }) => (
    
  <Fragment>
    
        <div> 
        <select required className="select" type={type}  name={name}>
      {arrayData.map(({ id, commonIdentifier }) => (
        <option key={id} >{commonIdentifier}</option>
        ))}
        </select>
        </div>

  </Fragment>
);

export default Select;
