import React, { useContext, useRef } from "react";
import { useState } from "react";
import { Jsondata } from "./Jsondata";
import { Usecontext } from "./Context";
function filterdata(value) {
  let filteredata = Jsondata.filter((data) => {
    const fullName = data?.first_name + " " + data?.last_name;
    return fullName.toLowerCase().includes(value.toLowerCase());
  });
  return filteredata;
}
const Header = () => {
  const myref = useRef();
  const [style, setstyle] = useState({});
  const [searchName, setsearchName] = useState("");
  const { setdata } = useContext(Usecontext);
  const handlecheck = (event) => {
    const { name, checked } = event.target;
    setstyle({ ...style, [name]: checked });
    console.log(style);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-info-subtle
"
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
                <button
                  className="btn fw-bold "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Filters
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                value={searchName}
                onChange={(e) => {
                  setsearchName(e.target.value);
                  let data = filterdata(searchName);
                  setdata(data);
                }}
                placeholder="Search by Name"
                className="form-control me-2"
                type="text"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={() => {
                  let data = filterdata(searchName);
                  setdata(data);
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <form action="" className="offcanvas-body">
          <div className="filters">
            <h3>Filter BY:</h3>
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
          <div className="submit-form">
            <button type="submit" className="btn btn-outline-success">
              Show Result
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Header;
