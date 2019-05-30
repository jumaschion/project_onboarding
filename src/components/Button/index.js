import './index.css'

import React from 'react'

const Button = ({titleBtn, children, onClick, className}) => (
    <button className={className} 
    onClick={onClick}>{children}{titleBtn}</button> 
)

export default Button