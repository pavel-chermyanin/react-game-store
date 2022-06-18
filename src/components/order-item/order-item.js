import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'


import { GameCover } from '../game-cover'
import './order-item.css'
import { deletItemFromCart } from '../../redux/cart/reducer'

export const OrderItem = ({ game }) => {
    const dispatch = useDispatch()


    const handleClick = () => {
        dispatch(deletItemFromCart(game.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={game.image}/>
            </div>
            <div className="order-item__title">
                <span>{game.title}</span>
            </div>
            <div className="order-item__price">
                <span>{game.price} руб.</span>
            </div>
                <AiOutlineDelete
                    size={25}
                    className="order-item__delete-icon"
                    onClick={handleClick}
                />
        </div>
    )
}
