import React from 'react'
import './gameBoard.css'

// Components
import Option from '../Option/Option'

const GameBoard = ({ options, handleOptionSelected }) => {

    return (
        <div className='options-list-container'>
            {
                options.map((option, index) => (
                    <Option key={index} src={option.src} value={option.value} handleClick={handleOptionSelected} />
                ))
            }
        </div>
    )
}

export default GameBoard