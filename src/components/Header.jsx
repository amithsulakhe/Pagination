import React from 'react'
[{"id":1,"first_name":"Anet","last_name":"Doe","email":"adoe0@comcast.net","gender":"Female","avatar":"https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
"domain":"Sales","available":false},]
const Header = () => {
  return (
    <div className="nav_bar">
        <div className="input_bar">
            <input placeholder='Search by Name' type="text" />
            <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="filter_category">
            <select name="" id="">
                <option value="">Domain</option>
                <option value="">Domain</option>
                <option value="">Domain</option>
            </select>
        </div>
    </div>
  )
}

export default Header