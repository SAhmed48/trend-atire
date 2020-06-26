import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({handleChange, children, ...otherProps}) => (
    <button 
        className='custom-button' {...otherProps} >
            {children}
        </button>
)

export default CustomButton;