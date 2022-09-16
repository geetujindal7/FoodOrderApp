import React from 'react'
import Card from './Card'
import './Cart.css'

function Cart() {
  return (
    <>
    <Card>
      <div>
        <ul className='cart_items'>
          {
            [{
              id: 'm1',
              name: 'sushi',
              description: 'jhkwagfjfgjgrjhrkhj',
              amount: '63.34'
            }].map((e) => {
              return <>
                <li>
                  {e.name}
                </li>
              </>
            })
          }
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>35.47</span>
      </div>
          <div className='actions'>
            <button className='button--alt'>
              Close
            </button>
            <button className='button'>
              Order
            </button>
          </div>
      </div>
      </Card>
    </>
  )
}

export default Cart
