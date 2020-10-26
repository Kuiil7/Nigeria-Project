import React from "react";
import '../styles/Navbar.css'



function Navbar() {
  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light"  aria-hidden="false"  role="navigation">

    <a className="navbar-brand " href="home">Musa School</a>
    <button className="nav-btn1 navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

    <div className="collapse navbar-collapse"id="navbarSupportedContent">

        <ul className="navbar-nav  mx-auto">
            <li className="nav-item ">
                <a className="nav-link" href="/#home">HOME </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#about">ABOUT </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#profile_main">STAFF</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#contact1">CONTACT</a>
            </li>

        </ul>
    </div>
</nav>

  );
}

export default Navbar;
