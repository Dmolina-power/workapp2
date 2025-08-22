import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "../../redux/User/user.actions";
import "./style.css";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  
});

const Navbar = (props) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();
  const { currentUser} = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  useEffect(() => {
    setActiveMenu(false);
  }, [location]);

  return (
    <>
      <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">
          NoName{" "}
        </a>{" "}
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"> </span>{" "}
        </button>{" "}
        {currentUser && (
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" to="/signin" onClick={() => signOut()}>
                Sign out{" "}
              </a>{" "}
            </li>{" "}
            <li class="nav-item text-nowrap">
              <Link to="/feed">
                feed{" "}
              </Link>{" "}
            </li>{" "}
          </ul>
        )}
        {!currentUser && [
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <Link to="/signin">
                Login <i class="fas fa-user-circle"> </i>{" "}
              </Link>{" "}
            </li>{" "}
          </ul>,
        ]}{" "}
      </nav>{" "}
    </>
  );
};

Navbar.defaultProps = {
  currentUser: null,
};

export default Navbar;
