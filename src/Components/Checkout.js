import React, { useRef, useState } from 'react'
import './Checkout.css'

const isEmpty = value => value.trim() === '';
const charFive = value => value.trim().lenght !== 5;

function Checkout(props) {

    const [validate, setValidate] = useState({
        nameValid: true,
        streetValid: true,
        PostalValid: true,
        CityValid: true,
    })

    const nameRef = useRef();
    const streetRef = useRef()
    const CityRef = useRef()
    const PostalRef = useRef()


    const confirmHandler = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = PostalRef.current.value;
        const city = CityRef.current.value;

        const validName = !isEmpty(name)
        const validStreet = !isEmpty(street)
        const validPostal = charFive(postal)
        const validcity = !isEmpty(city)
        
        setValidate({
            nameValid: validName,
            streetValid: validStreet,
            PostalValid: validPostal,
            CityValid: validcity
        })
        
        const formIsValid = validName && validStreet && validPostal && validcity
        if(!formIsValid)
        {
            return;
        }

        props.onSubmitting({
            name: name,
            street: street,
            postal: postal,
            city: city
        })
    }

    const nameControlClasses = `${`control`} ${validate.nameValid ? '' : `invalid` }`
    const streetControlClasses = `${`control`} ${validate.streetValid ? '' : `invalid` }`
    const postalControlClasses = `${`control`} ${validate.PostalValid ? '' : `invalid` }`
    const CityControlClasses = `${`control`} ${validate.CityValid ? '' : `invalid` }`


  return (
    <>
       <form className='forms' onSubmit={confirmHandler}>
           <div className={nameControlClasses}>
                <label htmlFor='name'>
                    Your Name
                </label>
                <input type='text' ref={nameRef} id ='name'/>
                {!validate.nameValid && <p>Please enter your Name</p>}
           </div>
           <div className={streetControlClasses}>
                <label htmlFor='street'>
                   Street
                </label>
                <input type='text' ref={streetRef} id ='street'/>
                {!validate.streetValid && <p>Please enter a valid Street</p>}
           </div>
           <div className={postalControlClasses}>
                <label htmlFor='pc'>
                   Postal Code
                </label>
                <input type='text' ref={PostalRef} id ='pc'/>
                {!validate.PostalValid && <p>Please Enter a valid Postal Code</p>}
           </div>
           <div className={CityControlClasses}>
                <label htmlFor='city'>
                   City
                </label>
                <input type='text' ref ={CityRef} id ='city'/>
                {!validate.CityValid && <p>Please enter a valid City</p>}
           </div>
           <div className='actions'>
           <button className='submit'>Confirm</button>
           <button type='button' onClick={props.onCancel}>Cancel</button>

           </div>
       </form>
    </>
  )
}

export default Checkout
