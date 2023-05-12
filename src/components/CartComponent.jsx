import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addUser,removeUser } from './Reduxslice/UserSelectedSlice';
import { Usecontext } from './Context';
import CartEmptyPage from './CartEmptyPage';
export const CartComponent = () => {
    const users=useSelector(store=>store.userSelected.UserSelected)
    const alreadyClickedUser=useSelector((store)=>store.userSelected.alreadyClickedUser)
    const [selectedUsers, setselectedUsers] = useState([])
    const {showCart,setshowCart}=useContext(Usecontext)
    const [btnState,setBtnState]=useState({checkedUser:null,selectedUser:null})
    const dispatch=useDispatch()
    const [removeUserSelected, setremoveuserSelected] = useState(alreadyClickedUser)
    console.log(removeUserSelected);
    useEffect(()=>{
      if(btnState.checkedUser!=null){
        const selectedUser=btnState.selectedUser
        const userSelected=removeUserSelected
        if(btnState.checkedUser){ 
          dispatch(addUser({selectedUser,userSelected}))
        }else{
          dispatch(removeUser({selectedUser,userSelected}))
        }
      }
    },[removeUserSelected])
    useEffect(()=>{
setselectedUsers(users.selectedItems)
    },[users])
    const handleCheckboxer = (e,selectedUser)=>{
      const {name,checked}=e.target
      setremoveuserSelected({...removeUserSelected,[name]:checked})
      setBtnState({...btnState,checkedUser:checked,selectedUser:selectedUser})
      
    }
  return (
    <>
    {
        selectedUsers?.length? <div className="cart-items-parent">
        <h3 className='fs-1 text-center'>Welcome to Cart</h3>
       
           <div className="cart-items">
           { 
                 selectedUsers.map((user,index)=>{
                   return  <div key={user.id} className="pagination_card">
                   <div className="full_name">
                     <img src={user.avatar} alt={user.gender} />
                     <h3>
                       Name:
                       <span>
                         {user.first_name} {user.last_name}
                       </span>
                     </h3>
                     <h3>
                       Gender:<span>{user.gender}</span>
                     </h3>
                   </div>
                   <div className="avatar_details">
                     <h3>
                       Availability:
                       <span>{user.available === true ? "Yes" : "No"}</span>{" "}
                     </h3>
                     <h3>
                       Domain:<span>{user.domain}</span>
                     </h3>
                   </div>
                   <label
                  
                     className={
                       removeUserSelected[`${user.first_name+ user.id}`]
                         ? "active btn btn-secondary"
                         : `gender btn`
                     }
                     htmlFor={user.first_name+user.id}
                   >
                     Remove User
                     <input
                checked={removeUserSelected[`${user.first_name +user.id}`]}

                       name={user.first_name+ user.id}
                       id={user.first_name+user.id}
                       type="checkbox"
                       style={{ visibility: "hidden", position: "absolute" }}
                       onChange={(e)=>handleCheckboxer(e,user)}
                     />
                   </label>
                 </div>
               })
           }
          
          </div>
          <button onClick={()=>setshowCart(!showCart)} type="button" className="goback btn btn-danger">Go back</button>
       
          </div>:<CartEmptyPage/>
    }
    </>
   
  )
}
