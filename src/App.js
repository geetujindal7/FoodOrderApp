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
    const updated = [...state.items, action.item]
    const total = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updated,
      totalAmount: total
    }
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
      dispatchCartAction({type: 'ADD', id: id })
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

