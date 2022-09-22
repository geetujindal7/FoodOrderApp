import React, { useEffect, useState } from 'react'
import './Meals.css'
import Card from './Card'
import MealItem from './MealItem';


function AvailableMeal() {

  const [state, setstate] = useState([])

  useEffect(() => {
   const fetchData = async () => {
    const resp = await fetch(`https://foodapp-fa71b-default-rtdb.firebaseio.com/DUMMY_MEALS.json`).then((data) => data.json())
   
    const loaded = [];
    for (const key in resp)
    {
      loaded.push({
        id: key,
        name: resp[key].name,
        description: resp[key].description,
        price: resp[key].price,
      });
    }
    setstate(loaded)
   } 
   fetchData()
   
  }, [])

  return (
   <>
       <section  className='meals'>
       <Card>
           <ul>
               {
                   state.map((e) => 
                       <>
                          <MealItem key={e.id} meal={e}/>
                      </>
                   ) 
               }
           </ul>
           </Card> 
           
       </section>
   </>
  )
}

export default AvailableMeal