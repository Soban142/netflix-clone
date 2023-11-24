import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => <Navigate to="/" />}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          onClick={() => <Navigate to="/profile" />}
          className="nav__avatar"
          src="https://media.tenor.com/sgQ73oidu1wAAAAC/netflix-avatar-smile.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
