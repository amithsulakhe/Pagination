import React from 'react'
import { useState } from 'react';
import { Jsondata } from './Jsondata'
const Filters = () => {
  const [style, setstyle] = useState({});

    const handlecheck = (event) => {
        const { name, checked } = event.target;
        setstyle({ ...style, [name]: checked });
        console.log(style);
      };
  return (
    <div
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <form action="" className="offcanvas-body">
      <div className="filters d-flex justify-content-between">
        <h3>Filter BY:</h3>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="filtering filter-gender">
        <b>Gender</b>
        <div className="filtering-category gender-category">
          {[...new Set(Jsondata.map((d) => d.gender))].map((ele, i) => (
            <label
              key={i}
              className={
                style[`${ele}`]
                  ? "active  btn btn-outline-secondary"
                  : `gender  btn btn-outline-secondary`
              }
              htmlFor={ele}
            >
              {ele}
              <input
                name={ele}
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
                style[`${ele === true ? "YES" : "NO"}`]
                  ? "active  btn btn-outline-secondary"
                  : `gender  btn btn-outline-secondary`
              }
              htmlFor={ele === true ? "YES" : "NO"}
            >
              {ele === true ? "YES" : "NO"}
              <input
                name={ele === true ? "YES" : "NO"}
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
                style[`${ele}`]
                  ? "active  btn btn-outline-secondary"
                  : `gender  btn btn-outline-secondary`
              }
              htmlFor={ele}
            >
              {ele}
              <input
                style={{ visibility: "hidden", position: "absolute" }}
                name={ele}
                onChange={handlecheck}
                id={ele}
                type="checkbox"
              />
            </label>
          ))}
        </div>
      </div>
      <div className="submit-form d-flex justify-content-between">
     
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>

        <button type="submit" className="btn btn-outline-success">
          Show Result
        </button>
      </div>
    </form>
  </div>
  )
}

export default Filters