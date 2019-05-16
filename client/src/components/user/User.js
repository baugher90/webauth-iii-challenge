import React from "react";
import '../../App.css'

const User = props => {
  return (
    <div className="pro-cont">
      <div className="ui card">
        <div className="content">
          <div className="header">{props.user.username}</div>
          <div className="department">{props.user.department}</div>
          <div className="role">{props.user.role}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
