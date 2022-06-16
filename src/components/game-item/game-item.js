import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { GameBuy } from '../game-buy'
import { GameCover } from '../game-cover'
import { GameGenre } from '../game-genre'
import { setCurrentGame } from '../../redux/games/reducer'
import './game-item.css'



export const GameItem = ({ game }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`)
    }
    return (
        <div
            onClick={handleClick}
            className="game-item">
            <GameCover image={game.image} />
            <div className="game-item__details">
                <span className="game-title__">
                    {game.title}
                </span>
                <div className="game-item__genre">
                    {game.genres.map(genre => (
                        <GameGenre genre={genre} key={genre} />
                    ))}
                </div>
                <div className="game-item__buy">
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    )
}

