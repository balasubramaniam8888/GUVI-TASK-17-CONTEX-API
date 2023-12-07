import React from 'react'
import { DataContex } from './contexdata'
import { useContext } from 'react'





function Header() {
 let state = useContext(DataContex)
  console.log(state);
  
  return (
    <section  className='text-center bg-body-tertiary mt-3 border border-black' >
     <img src={state.Data[0].images[4]} alt="img" className=' img-fluid' />
      
    </section>
  )
}

export default Header