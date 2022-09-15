import React from 'react'
import './Meals.css'

function MealItem({key, meal}) {
  return (
    <li>
        <div className='mealitem'>
            <h3>{meal.name}</h3>
            <div>{meal.description}</div>
            <div>{meal.price}</div>
        </div>
    </li>
  )
}

export default MealItem