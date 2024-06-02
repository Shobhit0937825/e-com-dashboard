import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import { getCurrentUser, logout } from "./store/reducers/auth";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <nav>
        {/* <Link to="/">Home</Link> */}
        {auth.currentUser === null ? (
          <Fragment>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </Fragment>
        ) : (
          <Link to="/login">
            <span className="logout" onClick={() => dispatch(logout())}>
              Logout
            </span>
          </Link>
        )}
      </nav>
      {/* <Login/> */}
      <div className="">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
