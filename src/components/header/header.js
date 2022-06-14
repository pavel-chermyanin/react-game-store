import { Link } from "react-router-dom";


import { CartBlock } from "../cart-block/cart-block";
import './header.css'


export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link
                    className="header__store-title"
                    to="/">
                    Game Store
                </Link>
            </div>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock/>
            </div>
        </div>
    )
}

