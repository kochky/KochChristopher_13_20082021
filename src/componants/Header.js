
import React from 'react';
import img from '../img/argentBankLogo.png';
import { Link,Redirect  } from 'react-router-dom'
import { connect } from 'react-redux'
import {useDispatch } from "react-redux";


function Navbar({auth, firstname}){

  const dispatch= useDispatch()

  function handleClick(){
    dispatch({ type: 'LOG_OUT'})
    localStorage.clear()
    sessionStorage.clear()
    return (<Redirect to='/' />)
  }

    if (!auth) {
      return (
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
    )}else {
      return (
        <div>
        <Link className="main-nav-item" to='/user'>
          <i className="fa fa-user-circle"></i>
          {firstname}
        </Link>
        <Link  className="main-nav-item" to='/' onClick={handleClick}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
      )
    }
}

function Header(props) {
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
          <Navbar auth={props.auth} firstname={props.firstname}/>
        </nav>
    )
}

const mapStateToProps= (state) => { 
  return state
}

export default connect(mapStateToProps)(Header)