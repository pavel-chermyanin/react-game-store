import React, { useState, useCallback } from 'react'
import { GrCart } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartMenu } from '../cart-menu';
import { ItemsInCart } from '../items-in-cart';
import { calcTotalPrice } from '../utils';

import './cart-block.css'


export const CartBlock = () => {
    const games = useSelector(state => state.cart.itemsInCart)

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const navigate = useNavigate()
    const totalPrice = calcTotalPrice(games)

    const handleClick = useCallback(
        () => {
            setIsCartMenuVisible(false)
            navigate('/order')
        },
        [navigate],
    )



    return (
        <div className="cart-block">
            <ItemsInCart quantity={games.length} />
            <GrCart
                onClick={(e) => {
                    e.stopPropagation()
                    setIsCartMenuVisible((prev) => !prev)
                }}
                size={25}
                className="cart-block__icon" />
            {totalPrice > 0 ?
                (
                    <span className="cart-block__total-price">
                        {totalPrice} руб.
                    </span>
                ) : null}
            {isCartMenuVisible && <CartMenu
                isCartMenuVisible={isCartMenuVisible}
                setIsCartMenuVisible={setIsCartMenuVisible}
                onClick={handleClick}
                games={games} />}
        </div>
    )
}

