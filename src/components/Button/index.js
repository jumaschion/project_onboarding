import './index.css'

import React from 'react'

const Button = ({children, handleclick}) => (
    <button className="btn__primary" onClick={handleclick}>
        {children}
    </button> 
)

export default Button