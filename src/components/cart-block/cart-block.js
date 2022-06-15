import React, { useState } from 'react'
import { GrCart } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu';
import { ItemsInCart } from '../items-in-cart';
import { calcTotalPrice } from '../utils';

import './cart-block.css'


export const CartBlock = () => {
    const games = useSelector(state => state.cart.itemsInCart)

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const totalPrice = calcTotalPrice(games)
    return (
        <div className="cart-block">
            <ItemsInCart quantity={games.length}/>
            <GrCart
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
                size={25}
                className="cart-block__icon" />
            {totalPrice > 0 ?
                (
                    <span className="cart-block__total-price">
                        {totalPrice} руб.
                    </span>
                ) : null}
            {isCartMenuVisible && <CartMenu
                onClick={() => null}
                games={games} />}
        </div>
    )
}

