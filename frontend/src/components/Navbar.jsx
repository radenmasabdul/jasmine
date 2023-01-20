import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="navbar bg-base-100 fixed shadow">
        <div className="navbar-start">
          <Link to="/dashboard" className="btn btn-ghost normal-case text-xl">
            Welcome
          </Link>
        </div>
        <div className="navbar-end">
          <p className="text-base mx-4">{user && user.name}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
