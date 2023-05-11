import React from "react";

import { useContext } from "react";
import { Usecontext } from "./Context";
const Paginationcard = ({count}) => {
  const {data}=useContext(Usecontext)
    console.log((count*20),(count*20)+21);
  return (
    <>
      <div className="maincard">
        {data.slice((count*20),(count*20)+21).map((user) => {
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Paginationcard;
