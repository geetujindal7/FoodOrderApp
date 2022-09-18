import React, { useContext, useRef } from 'react'
import CartContext from './Cart-Context'
import './Meals.css'

function MealItem({ key, meal }) {

    const amountInputRef = useRef()
    const context = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
    context.addItem({
        id: meal.id,
        name: meal.name,
        amount: enteredAmountNumber,
        price: meal.price
    }) 
  }

    

    return (
        <>
            <li className='mealItemForm'>
                <div className='mealitem'>
                    <h3>{meal.name}</h3>
                    <div className='mealItemDesc'>{meal.description}</div>
                    <h4>${meal.price}</h4>
                </div>
                <div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='amount_form'>
                            <label>
                                Amount
                            </label>
                            <input ref={amountInputRef} className='input_form' type="number" min={0} max={5} step={1} defaultValue={1}></input>
                        </div>
                        <button type='submit'>+ Add</button>
                    </form>

                </div>

            </li>
            <hr></hr>
        </>
    )
}

export default MealItem