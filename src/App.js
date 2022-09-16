import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Meals from './Components/Meals';




function App() {
  const [clicked, setClicked] = useState(false)

  const handleCartClick = () => {
    setClicked(true)
    console.log(clicked)
  }
  
  return (<>
  {
    clicked ? <><div className='blur_comp'>
    <Header handleCartClick ={ handleCartClick}/>
    <Meals />
    </div> 
    <Cart />
    </>:
    <div >
    <Header handleCartClick ={ handleCartClick}/>
    <Meals />
    </div>

  }
  
   
    </>
  );
}

export default App;

