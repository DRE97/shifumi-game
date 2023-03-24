import React from 'react'
import './option.css'

const Option = ({ src, value, handleClick, readOnly, userSelection }) => {

    return (
        <div
            className={`option-container ${readOnly ? 'readonly' : ''}`}
            onClick={() => {
                if(!readOnly) handleClick(value)
            }}
        >
            <img src={src} alt='option' className={`option-image ${readOnly ? 'readonly' : ''}`} />
            {readOnly && <p className='option-selected'>{userSelection ? 'You' : 'Computer'}</p>}
        </div>
    );
}

export default Option