import React from 'react'
import './gameResult.css'

// Utils
import { getOptionAsset } from '../../utils/utils'

// Components
import Option from '../Option/Option'
import GameControls from '../GameControls/GameControls'

const GameResult = ({ resultMessage, userSelection, computerSelection, resetGame }) => {

    return (
        <div className='game-result-container'>
            

            <div className='game-options-selected'>
                <Option
                    src={getOptionAsset(userSelection)}
                    readOnly
                    userSelection
                />
                <div>
                    <h3>{resultMessage}</h3>
                    <GameControls resetGame={resetGame} />
                </div>
                <Option
                    src={getOptionAsset(computerSelection)}
                    readOnly
                />
            </div>

        </div>
    );
}

export default GameResult