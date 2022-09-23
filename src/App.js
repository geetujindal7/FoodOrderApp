import { useState, useReducer } from 'react';
import './App.css';
import Cart from './Components/Cart';
import CartContext from './Components/Cart-Context';
import Header from './Components/Header';
import Meals from './Components/Meals';


const defaultCart = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD')
  {
    const existing = state.items.findIndex((e) => e.id === action.item.id)
    const existingCart = state.items[existing]
    console.log(existingCart)
    const total = state.totalAmount + action.item.price * action.item.amount;
    
    let updatedItems;

    if(existingCart)
    {
      let updatedItem = {
        ...existingCart,
        amount : action.item.amount + existingCart.amount
      }
      updatedItems = [...state.items]
      updatedItems[existing] = updatedItem
    }

    else{
       updatedItems = [...state.items, action.item]

    }
    return {
      items: updatedItems,
      totalAmount: total
    }
  }

  else if(action.type === 'REMOVE')
  {

    const existing = state.items.findIndex((item) => item.id === action.id)
    const existingcart = state.items[existing]
    console.log(existingcart)
    const total = state.totalAmount - existingcart.price

    let updatedItem;
    let updated;
    if(existingcart.amount === 1)
   {
     updated = state.items.filter((i) => i.id !== action.id)
   }
   else{

      updatedItem = {
        ...existingcart,
        amount: existingcart.amount - 1
      }
      updated = [...state.items];
      updated[existing] = updatedItem
    
   }
    return {
      items: updated,
      totalAmount: total
    }
  }
  else if(action.type === "CLEAR"){
    return defaultCart;
  }
return defaultCart

}

function App() {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart)

  const [clicked, setClicked] = useState(false)

  const handleCartClick = () => {
    setClicked(true)
    console.log(clicked)
  }

  const handleOnClose = () => {
    setClicked(false)
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({type: 'ADD', item: item })
    },
    removeItem: (id) => {
      dispatchCartAction({type: 'REMOVE', id: id })
    },
    clearItem: () => {
      dispatchCartAction({type: 'CLEAR'})
    }
  }
  
  
  return (<>
  <CartContext.Provider value={cartContext}>
  {
     clicked ? <>
    <Cart Close={handleOnClose}/><div className='blur_comp'>
    <Header handleCartClick ={handleCartClick}/>
    <Meals />
    </div> 
    </>
    :
    <div>
    <Header handleCartClick ={ handleCartClick}/>
    <Meals />
    </div>
  }
  </CartContext.Provider>
    </>
  );
}

export default App;

