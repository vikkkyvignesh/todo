import React from "react";
import logo from "./logo.png";
const User = () => {
  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="info">
        <p>To Do List</p>
      </div>
    </div>
  );
};

export default User;
