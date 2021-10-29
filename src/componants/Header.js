
import React from 'react';
import img from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

function Header() {
  
    return(
        <nav className="main-nav">
          <Link  to="/" className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={img}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <Navbar />
        </nav>
    )
}

export default Header

