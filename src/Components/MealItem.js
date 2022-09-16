import React from 'react'
import './Meals.css'

function MealItem({ key, meal }) {
    return (
        <>
            <li className='mealItemForm'>
                <div className='mealitem'>
                    <h3>{meal.name}</h3>
                    <div className='mealItemDesc'>{meal.description}</div>
                    <h4>${meal.price}</h4>
                </div>
                <div>
                    <form className='form'>
                   <div className='amount_form'>
                   <label>
                        Amount
                    </label>
                        <input className='input_form' type="number" min={1} max={5} step={1} defaultValue={1}></input>
                   </div>
                        <button>+ Add</button>
                    </form>

                </div>

            </li>
            <hr></hr>
        </>
    )
}

export default MealItem