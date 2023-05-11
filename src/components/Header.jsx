import React, { useContext } from "react";
import { useState } from "react";
import { Jsondata } from "./Jsondata";
import { Usecontext } from "./Context";
function filterdata(value) {
  let filteredata = Jsondata.filter((data) =>{
  const fullName=data?.first_name +" "+ data?.last_name
  return  fullName.toLowerCase().includes(value)
});
  return filteredata;
}
const Header = () => {
  const [searchName, setsearchName] = useState("");
  const { setdata } = useContext(Usecontext);
  return (
    <div className="nav_bar">
      <div className="input_bar">
        <input
          value={searchName}
          onChange={(e) => {setsearchName(e.target.value);
            let data = filterdata(searchName);
            setdata(data);
          }}
       
          placeholder="Search by Name"
          type="text"
        />

        <button
          onClick={() => {
            let data = filterdata(searchName);
            setdata(data);
          }}
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="filter_category">
        <select name="" id="">
          <option value="">Domain</option>
          <option value="">Domain</option>
          <option value="">Domain</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
