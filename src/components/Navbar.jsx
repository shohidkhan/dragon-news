import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className=""></div>
      <div className="nav flex gap-3 text-accent text-sm">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-3 login-btn">
        <img src={user} alt="user" />
        <button className=" btn btn-primary rounded-none px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
