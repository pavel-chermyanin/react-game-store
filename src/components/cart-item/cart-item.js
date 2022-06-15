import React from 'react'

import './cart-item.css'

export const CartItem = ({ id, title, price }) => {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <span className="cart-item__price">
                {price} руб.
            </span>
        </div>
    )
}
