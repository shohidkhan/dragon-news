import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center mt-5">
      <div className=""></div>
      <div className="nav flex gap-3 text-accent text-sm">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-3 login-btn">
        {user ? (
          <img
            src={user.photoURL || userIcon}
            alt="user"
            className="w-10 rounded-full"
          />
        ) : (
          <img src={userIcon} alt="user" className="w-10 rounded-full" />
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className=" btn btn-primary rounded-none px-10"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className=" btn btn-primary rounded-none px-10"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
