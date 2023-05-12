import React, { useContext, useRef } from "react";
import { useState } from "react";
import { Jsondata } from "./Jsondata";
import { Usecontext } from "./Context";
import { useSelector } from "react-redux";
import Filters from "./Filters";

function filterdata(value) {
  let filteredata = Jsondata.filter((data) => {
    const fullName = data?.first_name + " " + data?.last_name;
    return fullName.toLowerCase().includes(value.toLowerCase());
  });
  return filteredata;
}
const Header = () => {

  const users=useSelector(store=>store.userSelected.UserSelected)
console.log(users);
  const [searchName, setsearchName] = useState("");
  const { setdata ,showCart,setshowCart,FilterApply,setFilterApply}=useContext(Usecontext);

const cartHandler=()=>{
  setshowCart(!showCart)
}
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-info-subtle"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pagination
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span
                  className=" fw-bold "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Filters
                </span>
              </li>
              <li className="nav-item">
                <span onClick={cartHandler}
                  className=" fw-bold "
                  type="button"
                
                >
                  Cart-{users.selectedItems.length}
                </span>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <input
                value={searchName}
                onChange={(e) => {
                  setsearchName(e.target.value);
                  let data = filterdata(searchName);
                  setFilterApply(data);
                }}
                placeholder="Search by Name"
                className="form-control me-2"
                type="text"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  let data = filterdata(searchName);
                  setFilterApply(data);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Filters />
    </>
  );
};

export default Header;
