import React from 'react'



import { Button } from '../button'
import { CartItem } from '../cart-item'
import { calcTotalPrice } from '../utils'


import './cart-menu.css'


export const CartMenu = ({ games = [], onClick }) => {
    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {
                    games.length > 0
                        ? games.map(game => (
                            <CartItem
                                key={game.title}
                                title={game.title}
                                id={game.id}
                                price={game.price} />
                        ))
                        : 'Корзина пуста'
                }
            </div>
            {
                games.length > 0 ?
                    <div className="cart-menu__arrange">
                        <div className="cart-menu__total-price">
                            <span>Итого:</span>
                            <span>
                                {calcTotalPrice(games)} руб.
                            </span>
                        </div>
                        <Button
                            onClick={onClick}
                            type="primary"
                            size="m">
                            Оформить заказ
                        </Button>
                    </div>
                    : null
            }
        </div>
    )
}

