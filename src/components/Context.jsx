import React, { createContext } from 'react'
import { Jsondata } from './Jsondata'
import { useState } from 'react'
export   const Usecontext=createContext()
const Context = ({children}) => {
  const [data, setdata] = useState(Jsondata);
  const [showCart, setshowCart] = useState(false)

  return (
    <Usecontext.Provider value={{showCart,setshowCart, data,setdata}}>
{children}
    </Usecontext.Provider>
  )
}

export default Context