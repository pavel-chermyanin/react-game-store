import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { Button } from '../button'

import './game-buy.css'

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)

    const onClickAddToCart = (e) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(deletItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))
        }
    }
    return (
        <div className="game-buy">
            <span className="game-buy__price">
                {game.price} руб.
            </span>
            <Button
                type={isItemInCart ? "secondary" : "primary"}
                onClick={onClickAddToCart}
            >
                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    )
}

