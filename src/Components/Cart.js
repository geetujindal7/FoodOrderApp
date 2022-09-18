import React, { useContext } from 'react'
import Card from './Card'
import CartContext from './Cart-Context'
import './Cart.css'

function Cart(props) {

  const context = useContext(CartContext)
  const total = context.totalAmount.toFixed(2);

  const hasitems  = context.items.length > 0;


  return (
    <>
    <div className='main_cart' onClick={props.Close}>
    <Card>
      <div >
        <ul className='cart_items'>
          {
           context.items.map((e) => {
              return <>
                <li className='meals_list'>
                  {e.name}
                </li>
              </>
            })
          }
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
          <div className='actions'>
            <button className='button--alt' onClick={props.Close}>
              Close
            </button>
           
           {hasitems && <button className='button'>
              Order
            </button>}
          </div>
      </div>
      </Card>
      </div>
    </>
  )
}

export default Cart
