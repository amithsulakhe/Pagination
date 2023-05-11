import React, { createContext } from 'react'
import { Jsondata } from './Jsondata'
import { useState } from 'react'
export   const Usecontext=createContext()
const Context = ({children}) => {
  const [data, setdata] = useState(Jsondata);

  return (
    <Usecontext.Provider value={{data,setdata}}>
{children}
    </Usecontext.Provider>
  )
}

export default Context