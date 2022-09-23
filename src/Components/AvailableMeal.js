import React, { useEffect, useState } from 'react'
import './Meals.css'
import Card from './Card'
import MealItem from './MealItem';


function AvailableMeal() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()




  useEffect(() => {
   const fetchData = async () => {
     setIsLoading(true)
    const resp = await fetch(`https://foodapp-fa71b-default-rtdb.firebaseio.com/DUMMY_MEALS.json`).then((data) => data.json())
    if(resp === null ) 
    {
    
      throw new Error('Failed to fetch')
    }
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
    setData(loaded)
   } 
   
    fetchData().catch((err) =>  setError(err.message))
   
  
   setIsLoading(false)
  }, [])

  if(error) 
  {
    return <section className='loading'>{error}</section>
  }
  return (
   <> 
   
       {
         isLoading ? <section className='loading'>Loading</section> : 
         <section  className='meals'>
       <Card>
           <ul>
               {
                  data.map((e) => 
                       <>
                          <MealItem key={e.id} meal={e}/>
                      </>
                   ) 
               }
           </ul>
           </Card> 
           
       </section>
       }
   </>
  )
}

export default AvailableMeal