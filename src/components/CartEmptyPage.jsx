import React from 'react'
import { useContext } from 'react';
import { Usecontext } from './Context';
const CartEmptyPage = () => {
  const {showCart,setshowCart} = useContext(Usecontext);

  return (
    <div className="cartemptypage" >
        <h3 className='fs-1'>Cart is Empty Go Back</h3>
        <button onClick={()=>setshowCart(!showCart)} type="button" class="btn btn-danger">Go back</button>
    </div>
  )
}

export default CartEmptyPage