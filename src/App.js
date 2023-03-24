import { useState, useEffect } from 'react'
import './App.css'

// Components
import Score from './components/Score/Score'
import GameResult from './components/GameResult/GameResult'
import GameBoard from './components/GameBoard/GameBoard'
import GameControls from './components/GameControls/GameControls'

// Utils
import { getCurrentScore, setNewScore, options } from './utils/utils'

function App() {
  const [resultMessage, setResultMessage] = useState('')
  const [currentScore, setCurrentScore] = useState(null)
  const [userSelection, setUserSelection] = useState(null)
  const [computerSelection, setComputerSelection] = useState(null)
  const [gameInProgress, setGameInProgress] = useState(true)

  useEffect(() => {
    setCurrentScore(getCurrentScore())
  }, [currentScore])

  const saveScore = (newScore) => {
    setNewScore(newScore)
    setCurrentScore(newScore)
  }

  const resetScore = () => {
    setNewScore(0)
    setCurrentScore(0)
    resetGame()
  }

  const resetGame = () => {
    setResultMessage('')
    setGameInProgress(true)
  }

  const handleOptionSelected = (selectedOption) => {
    const randomSelection = getComputerSelection()

    setUserSelection(selectedOption)
    setComputerSelection(randomSelection)
    
    getResults(selectedOption, randomSelection)
    setGameInProgress(false)
  }

  const getComputerSelection = () => {
    return options[Math.floor(Math.random() * options.length)].value
  }

  const getResults = (userSelection, computerSelection) => {
    switch (userSelection + '/' + computerSelection) {
        case 'paper/rock':
        case 'scissors/paper':
        case 'rock/scissors':
            setResultMessage('YOU WIN !!')
            saveScore(currentScore + 1)
            break;
    
        case 'rock/rock':
        case 'paper/paper':
        case 'scissors/scissors':
            setResultMessage("IT'S A TIE !!")
            break;
        default:
            setResultMessage('YOU LOOSE !!!')
            saveScore(currentScore - 1)
            break;
      }
  }

  return (
    <div className="App">

      <h1 className='game-title'>Rock - Paper - Scissors</h1>
      <Score currentScore={currentScore} />

      {
        gameInProgress ?
        <GameBoard
          options={options}
          handleOptionSelected={handleOptionSelected}
        /> :
        <GameResult
          resultMessage={resultMessage}
          userSelection={userSelection}
          computerSelection={computerSelection}
          resetGame={resetGame}
        />
      }

      <GameControls
        mainView
        resetScore={resetScore}
      />

    </div>
  );
}

export default App;
