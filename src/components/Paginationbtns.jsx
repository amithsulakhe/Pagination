import React from 'react'
import { useState } from 'react'
import Paginationcard from './Paginationcard'
import { Jsondata } from './Jsondata'
const Paginationbtns = () => {
    const [count, setcount] = useState(0)
    
  return (
    <>
    <Paginationcard/>

    <div className="btns">
        <div className="c">

        <button className='btn-left'><i className="fa-solid fa-backward"></i></button>
        {
            Jsondata.slice(0,21).map((_,i)=>
        <button className='btn' >{i+1}</button>)
        }
        
        <button className=' btn-right'><i className="fa-solid fa-forward"></i></button>
        </div>

    </div>

    </>
  )
}

export default Paginationbtns