import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useState, useEffect } from "react";
import { Usecontext } from "./Context";
import { Jsondata } from "./Jsondata";
import { setFilter } from "./Reduxslice/StoreFilterData";
import { addUser,removeUser } from "./Reduxslice/UserSelectedSlice";

const Paginationcard = ({ count,showCart }) => {
  const {FilterApply,setFilterApply}=useContext(Usecontext)
  const alreadyClickedUser = useSelector(
    (store) => store.userSelected.alreadyClickedUser
  );
  const dispatch = useDispatch();
  const [userSelected, setUserSelected] = useState({});
  const FilterItemsApplied = useSelector((store) => store.filter.FilterData);
  // console.log(FilterItemsApplied);
  const [btnState, setBtnState] = useState({
    checkedUser: null,
    selectedUser: null,
  });
  const StoreFilterItems = useSelector((store) => store.storefilter.storeItems);
  // console.log(StoreFilterItems);
  // const handleCheckbox = (e, selectedUser) => {
  //   console.log(selectedUser);
  //   if(!selectedUser.available){
  //     alert("User Not available")  
  //   }
  //   else{
  //     const { name, checked } = e.target;
  //     setUserSelected({ ...userSelected, [name]: checked });
  
  //     if (checked) {
  //       dispatch(addUser({ selectedUser }));
  //     } else {
  //       dispatch(removeUser({ selectedUser }));
  //     }
  //   }
 
  // };
  const handleCheckbox = (e, selectedUser) => {
    if (selectedUser.available) {
      const { name, checked } = e.target;
      setUserSelected({ ...userSelected, [name]: checked });
      setBtnState({
        ...btnState,
        checkedUser: checked,
        selectedUser: selectedUser,
      });
    } else {
      alert("User Not Available")
      // setShowToast(!showToast)
    }
  };
useEffect(() => {
  setUserSelected(alreadyClickedUser || {});
 }, [showCart]);
useEffect(() => {
  if (btnState.checkedUser != null) {
    const selectedUser = btnState.selectedUser;
    if (btnState.checkedUser) {
    dispatch(addUser({ selectedUser, userSelected }));
    } else {
      dispatch(removeUser({ selectedUser, userSelected }));
    }
  }
}, [userSelected]);
  useEffect(() => {
    setFilterApply(StoreFilterItems);
  }, [StoreFilterItems]);
  useEffect(() => {
    const filteredData = Jsondata.filter((data) => {
      const { gender, domain, availability } = FilterItemsApplied;

      if (gender.length > 0 && !gender.includes(data.gender)) {
        return false;
      }

      if (domain.length > 0 && !domain.includes(data.domain)) {
        return false;
      }

      if (
        availability.length > 0 &&
        !availability.includes(data.available ? "YES" : "NO")
      ) {
        return false;
      }

      return true;
    });

    dispatch(setFilter(filteredData));
  }, [FilterItemsApplied]);
  return (
    <>
      <div className="maincard">
        {FilterApply.slice(count * 20, count * 20 + 21).map((user,index) => {
          return (
            <div key={user.id} className="pagination_card">
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
                  userSelected[`${user.first_name+ user.id}`]
                    ? "active btn btn-secondary"
                    : `gender btn`
                }
                htmlFor={user.id}
              >
                Select User
                <input
                checked={userSelected[`${user.first_name +user.id}`]}
                  name={user.first_name+ user.id}
                  id={user.id}
                  type="checkbox"
                  style={{ visibility: "hidden", position: "absolute" }}
                  onChange={(e)=>handleCheckbox(e,user)}
                />
              </label>
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default Paginationcard;
