// Assets
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'
import scissors from '../assets/scissors.png'

// Contants
import { SCORE_KEY } from './contants'

export const options = [
    {
        value: 'rock',
        src: rock
    },
    {
        value: 'paper',
        src: paper
    },
    {
        value: 'scissors',
        src: scissors
    }
]

export const getOptionAsset = (value) => {
    return options.find(option => option.value === value).src
}

export const getCurrentScore = () => {
    let  currentScore = localStorage.getItem(SCORE_KEY)

    if(!currentScore) {
        localStorage.setItem(SCORE_KEY, 0)
        return 0
    }

    return Number(currentScore)
}

export const setNewScore = (newScore) => {
    localStorage.setItem(SCORE_KEY, newScore)
}