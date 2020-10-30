import React from "react";
import '../styles/Navbar.css'



function Navbar() {
  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light"  aria-hidden="false"  role="navigation">

    <a className="navbar-brand " href="home">Duglu School for the Deaf</a>
    <button className="nav-btn1 navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

    <div className="collapse navbar-collapse"id="navbarSupportedContent">

        <ul className="navbar-nav  mx-auto">
            <li className="nav-item ">
                <a className="nav-link" href="/#home">Home </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#about">About </a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" href="#academics">Academics</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#admission">Admission</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#campus">Campus Life</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#news">News & Events</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#support">Support Us</a>
                  </li>
            <li className="nav-item">
                <a className="nav-link" href="/#profile_main">Staff</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#contact1">Contact</a>
            </li>

        </ul>
    </div>
</nav>

  );
}

export default Navbar;
