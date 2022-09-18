import React, { useContext } from 'react'
import imageMeals from '../meals.jpeg'
import './Header.css'
import CartIcon from '../cartIcon.jpeg'
import CartContext from './Cart-Context'

function Header(props) {

    const context = useContext(CartContext )
    const totalItems = context.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);

    return (
        <>
            <header className='header'>
                <h1>Food Order</h1>
                <button onClick={() => props.handleCartClick()} className='Cart_Button'>
                    <span>
                        <img className='icon_cart' src={CartIcon} alt="CartIcon"/>
                    </span>
                    <span>
                        Your Cart
                    </span>
                    <span className='badge'>
                        {totalItems}
                    </span>
                </button>
            </header>
            <div className='main-image'>
                <img className='main-image_image' src={imageMeals} alt="meals " />
            </div>
        </>
    )
}

export default Header
