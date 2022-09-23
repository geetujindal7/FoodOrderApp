import React, { useContext, useState } from 'react'
import Card from './Card'
import CartContext from './Cart-Context'
import './Cart.css'
import Checkout from './Checkout'

function Cart(props) {

  const [submitting, setSubmitting] = useState(false)
  const [isCheckout, setisCheckout] = useState(false)
  const [didSubmitted, setDidSubmitted] = useState(false)
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

    const orderHandler =() => {
      setisCheckout(true)
    }

    const submitHandler =async (userdata) => {
      setSubmitting(true)
       await fetch('https://foodapp-fa71b-default-rtdb.firebaseio.com/orders.json', {
          method: 'POST',
          body: JSON.stringify({
            user : userdata,
            orderedItems: context.items
          })
        })
       setSubmitting(false) 
       setDidSubmitted(true)
       context.clearItem();
    }

    if(didSubmitted)
    {
      
      return <>
      <div className='main_cart'>
      <Card>
        <div className="submitted_cart">
        <p>Your Order has been Submitted!! Please wait for your order to be dispatched.</p>
        <div className='actions'>
              <button className='button--alt' onClick={props.Close}>
                Close
              </button>
              </div>
        </div>
        
        </Card>
      </div>  
      </>
    }
  return (
    <>

      <div className='main_cart' >
        <Card>
        {
          submitting ? <p>Submitting the Order</p> :
        
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
            {!isCheckout && <div className='actions'>
              <button className='button--alt' onClick={props.Close}>
                Close
              </button>

              {hasitems && <button className='button' onClick={orderHandler}>
                Order
              </button>}

            </div>}
           {isCheckout &&  <Checkout onSubmitting = { submitHandler} onCancel={props.Close} />}
          </div>
        }
        </Card>
      </div>
    </>
  )
}

export default Cart
