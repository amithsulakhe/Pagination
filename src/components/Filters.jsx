import React from 'react'
import { useState } from 'react';
import { Jsondata } from './Jsondata'
import { useDispatch } from 'react-redux';
import { addFilters } from './Reduxslice/FIlterslice';
const Filters = () => {
  const [style, setstyle] = useState({});
const dispatch=useDispatch()
const handlesubmit=(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const selectedfilter=Object.fromEntries(formData.entries())
    dispatch(addFilters({selectedfilter}))
    console.log(selectedfilter);
}
    const handlecheck = (event) => {
        const { name, checked } = event.target;
        setstyle({ ...style, [name]: checked });
    
      };
  return (
    <div
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <form onSubmit={handlesubmit} action="" className="offcanvas-body">
      <div className="filters d-flex justify-content-between">
        <h3>Filter BY:</h3>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="filtering filter-gender">
        <b>Gender</b>
        <div className="filtering-category gender-category">
          {[...new Set(Jsondata.map((d) => d.gender))].map((ele, i) => (
            <label
              key={i}
              className={
                style[`${"gender+"+ele}`]
                  ? "active btn btn-secondary"
                  : `gender btn`
              }
              htmlFor={ele}
            >
              {ele}
              <input
                name={"gender+"+ele}
                id={ele}
                type="checkbox"
                style={{ visibility: "hidden", position: "absolute" }}
                onChange={handlecheck}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="filtering">
        <b>Availability</b>
        <div className="filtering-category">
          {[...new Set(Jsondata.map((d) => d.available))].map((ele, i) => (
            <label
              key={i}
              className={
                style[ele === true ? "availability+YES" : "availability+NO"]
                ? "active btn btn-secondary"
                  : `gender btn`
              }
              htmlFor={ele === true ? "YES" : "NO"}
            >
              {ele === true ? "YES" : "NO"}
              <input
                name={ele === true ? "availability+YES" : "availability+NO"}
                id={ele === true ? "YES" : "NO"}
                type="checkbox"
                style={{ visibility: "hidden", position: "absolute" }}
                onChange={handlecheck}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="filtering filter-gender">
        <b>Domain</b>
        <div className="filtering-category gender-category">
          {[...new Set(Jsondata.map((d) => d.domain))].map((ele, i) => (
            <label
              key={i}
              className={
                style[`${"domain+"+ele}`]
                ? "active btn btn-secondary"
                  : `gender btn`
              }
              htmlFor={ele}
            >
              {ele}
              <input
                style={{ visibility: "hidden", position: "absolute" }}
                name={"domain+"+ele}
                onChange={handlecheck}
                id={ele}
                type="checkbox"
              />
            </label>
          ))}
        </div>
      </div>
      <div className="submit-form d-flex justify-content-between">
     
        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
        <button type="submit" className="btn btn-outline-success" data-bs-dismiss="offcanvas" aria-label="Close">  Show Result</button>
      </div>
    </form>
  </div>
  )
}

export default Filters