import React, { useContext } from 'react'
import { useState } from 'react'
import Paginationcard from './Paginationcard'
import { Jsondata } from './Jsondata'
import { Usecontext } from './Context'
import { CartComponent } from './CartComponent'
const Paginationbtns = () => {
    const [count, setcount] = useState(0)
    const {showCart}=useContext(Usecontext)
    const [transformbtn, settransformbtn] = useState(50)
    const handleright=()=>{
        settransformbtn((prev)=>prev-50)
    }
    const handleleft=()=>{
        if(transformbtn<50)settransformbtn((prev)=>prev+50)

    }

  return (
    <>
    {
        !showCart? <Paginationcard count={count}/>:<CartComponent/>

    }

    <div className="btns">
        <div className="btn-parent">
        <button onClick={handleleft} className='btn-left'><i className="fa-solid fa-backward"></i></button>
<div className="btn-wrapper">
<div  style={{transform:`translateX(${transformbtn}px)`}} className="btn-child">
        {
            Jsondata.slice(0,Jsondata.length/2).map((_,i)=>
        <button onClick={()=>setcount(i)} key={i} className='btn' >{i+1}</button>)
        }
        
        </div>
        <button onClick={handleright} className=' btn-right'><i className="fa-solid fa-forward"></i></button>

        </div>
        </div>
    </div>

    </>
  )
}

export default Paginationbtns