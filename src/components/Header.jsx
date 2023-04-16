import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <Link className="btn btn-ghost normal-case text-xl">
          SumonTech Auth
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user ? (
          <div>
            {" "}
            <span>{user.email}</span>
            <button
              onClick={handleLogOut}
              className="btn btn-xs btn-warning ml-2"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </>
  );
};

export default Header;
