import React from "react";
import user from "./images/user.png";

export default function Contactcard(props) {
  const { id, name, email } = props.contact;
  return (
    <div>
      <div className="item">
        <img className="ui avatar image " src={user} alt="user" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        <i
          className="trash alternate outline icon"
                  style={{ float: "right", color: "red" }}
                  onClick={()=>props.clickhandler(id)}
        ></i>
      </div>
    </div>
  );
}
