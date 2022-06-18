import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import { deletItemFromCart } from '../../redux/cart/reducer'


import './cart-item.css'

export const CartItem = ({ id, title, price }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deletItemFromCart(id))
    }
    return (
        <div className="cart-item">
            <span>{title}</span>
            <span className="cart-item__price">
                {price} руб.
            </span>
            <AiOutlineDelete
                size={20}
                className="order-item__delete-icon"
                onClick={handleClick}
            />
        </div>
    )
}
