import React from 'react'
import './gameControls.css'

const GameControls = ({ mainView, resetScore, resetGame }) => {
    return (
        <div className='controls-container'>
            {!mainView && (
                <button
                    className='game-control'
                    onClick={resetGame}
                >
                    Play Again
                </button>
            )}
            {mainView && (
                <button
                    className='main-game-control'
                    onClick={resetScore}
                >
                    Reset Score
                </button>
            )}
        </div>
    );
}

export default GameControls