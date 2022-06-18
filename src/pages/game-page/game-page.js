import React from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GameCover } from '../../components/game-cover'
import { GameGenre } from '../../components/game-genre'
import { GameBuy } from '../../components/game-buy'
import { GAMES } from '../home-page'


import './game-page.css'
import { setCurrentGame } from '../../redux/games/reducer'

export const GamePage = () => {
    const game = useSelector(state => state.games.currentGame)
    const dispatch = useDispatch()
    const {id} = useParams()

    if (id) {
        const game = GAMES.find(game => game.id === Number(id))
        dispatch(setCurrentGame(game))
    }
    if (!game) return null

    return (
        <div className="game-page">
            <h1 className="game-page__title">
                {game.title}
            </h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe
                        src={game.video}
                        width="90%"
                        height="400px"
                        title="Youtube Video"
                        frameBorder={null}
                    ></iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className="secondary-text">
                        Популярные метки этого продукта:
                    </p>
                    {game.genres.map((genre) => (
                        <GameGenre genre={genre} key={genre} />
                    ))}
                    <div className="game-page__buy-game">
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    )
}
