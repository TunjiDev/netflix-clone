import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    function scroll() {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    }

    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://i.ibb.co/Xxn014c/download-1.png"
        alt="Netflx Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.ibb.co/ZBR1nNY/download-2.png"
        alt="Netflx Logo"
      />
    </div>
  );
}

export default Nav;
