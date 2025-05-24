import React from "react";
import logo from "../../assests/images/logo.jpg";
import {Link} from "react-router-dom";
import "../common/header.css"

const Header = () => {
    return (
        <>

  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <Link className="navbar-brand " to="#"><img src={logo} width="100px" height="80px" alt="Logo" /></Link>
      <h1>Spicy Platter's</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown" >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu">Menu</Link>
          </li>
          
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Gallery
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/photos">Photos</Link></li>
              <li><Link className="dropdown-item" to="/videos">Videos</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">ContactUs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/NgoConnection">NgoConnection</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  
      
    

        </>
    )
}
export default Header;