import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addUser,removeUser } from './Reduxslice/UserSelectedSlice';
import { Usecontext } from './Context';
import CartEmptyPage from './CartEmptyPage';
export const CartComponent = () => {
    const users=useSelector(store=>store.userSelected.UserSelected)
    const [selectedUsers, setselectedUsers] = useState([])
    const {showCart,setshowCart}=useContext(Usecontext)
    const dispatch=useDispatch()
    const [removeUserSelected, setremoveuserSelected] = useState({})
    console.log(users.selectedItems);
    useEffect(()=>{
setselectedUsers(users.selectedItems)
    },[users])
    const handleCheckboxer = (e, selectedUser) => {
        const { name, checked } = e.target;
        setremoveuserSelected({ ...removeUserSelected, [name]: checked })
        if (!checked) {
          dispatch(addUser({ selectedUser }));
        } else {
          dispatch(removeUser({ selectedUser }));
        }
      };
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
                       removeUserSelected[`${user.first_name+ index}`]
                         ? "active btn btn-secondary"
                         : `gender btn`
                     }
                     htmlFor={user.first_name+index}
                   >
                     Remove User
                     <input
                       name={user.first_name+ index}
                       id={user.first_name+index}
                       type="checkbox"
                       style={{ visibility: "hidden", position: "absolute" }}
                       onChange={(e)=>handleCheckboxer(e,user)}
                     />
                   </label>
                 </div>
               })
           }
          
          </div>
          <button onClick={()=>setshowCart(!showCart)} type="button" class="goback btn btn-danger">Go back</button>
       
          </div>:<CartEmptyPage/>
    }
    </>
   
  )
}
