import React from 'react'
import { GrCart } from 'react-icons/gr';

import './cart-block.css'

export const CartBlock = () => {
    return (
        <div className="cart-block">
            <GrCart
                size={25}
                className="cart-block__icon" />
            <span className="cart-block__total-price">
                2300 руб.
            </span>
        </div>
    )
}

