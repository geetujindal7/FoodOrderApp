import React, { useContext } from 'react'
import Card from './Card'
import CartContext from './Cart-Context'
import './Cart.css'

function Cart(props) {

  const context = useContext(CartContext)
  const total = context.totalAmount.toFixed(2);

  const hasitems = context.items.length > 0;

  const handleCartAdd = (e) => {
    console.log(e)
        context.addItem(e)
    }

    const handleCartRemove = (id) => {
      context.removeItem(id)
    }


  return (
    <>
      <div className='main_cart' >
        <Card>
          <div className='cart_items' >
            <ul>
              {
                context.items.map((e) => {
                  return <>
                    <div className='cart_buttons'>
                      <div>
                        <li className='meals_list'>
                          {e.name}
                        </li>
                       <div className='cart_buttons'>
                       <span className='price_cart'>${e.price}</span>
                      <h3 className='amount_cart'>x{e.amount}</h3>
                       </div>
                      </div>
                       <div className='addition_cart'>
                       <button onClick={() => handleCartRemove(e.id)}>-</button>
                       <button onClick={() => handleCartAdd(e)}>+</button>
                       </div>
                      
                   
                    </div>
                    <hr></hr>
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
