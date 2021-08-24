
import React from 'react';
import img from '../img/argentBankLogo.png';
import { Link,Redirect  } from 'react-router-dom'
import { connect} from 'react-redux'
import { useSelector, useDispatch } from "react-redux";



function Navbar(){
  const firstName=useSelector((state)=> state.firstName)

  const auth= useSelector((state)=> state.auth)
  const dispatch= useDispatch()


  function handleClick(){
    dispatch({ type: 'FETCH_DATA', auth:false})
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
        <Link class="main-nav-item" to='/user'>
          <i class="fa fa-user-circle"></i>
          {firstName}
        </Link>
        <Link  class="main-nav-item" to='/' onClick={handleClick}>
          <i class="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>

      )
    }

}

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
const mapStateToProps= (state) => { 
    return state
}
export default connect(mapStateToProps)(Header)