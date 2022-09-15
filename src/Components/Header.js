import React from 'react'
import imageMeals from '../meals.jpeg'
import './Header.css'
import CartIcon from '../cartIcon.jpeg'

function Header() {
    return (
        <>
            <header className='header'>
                <h1>React Meals</h1>
                <button className='Cart_Button'>
                    <span>
                        <img className='icon_cart' src={CartIcon} alt="CartIcon"/>
                    </span>
                    <span>
                        Your Cart
                    </span>
                    <span className='badge'>
                        3
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
