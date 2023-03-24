import React from 'react'
import './score.css'

const Score = ({ currentScore }) => {

    return (
        <div className='score-container'>
            <p className='score'>Score: {currentScore}</p>
        </div>
    );
}

export default Score