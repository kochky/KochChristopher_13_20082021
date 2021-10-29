import { connect } from 'react-redux'
import { Link,Redirect  } from 'react-router-dom'

function Navbar(state){

    function handleClick(){
      state.logOut()
      localStorage.clear()
      sessionStorage.clear()
      return (<Redirect to='/' />)
    }
  
      if (!state.auth) {
        return (
          <div>
            <Link className="main-nav-item" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
      )}else {
        return (
          <div>
          <Link className="main-nav-item" to='/user'>
            <i className="fa fa-user-circle"></i>
            {state.firstname}
          </Link>
          <Link  className="main-nav-item" to='/' onClick={handleClick}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
        )
      }
  }
  const mapStateToProps= (state) => { 
    return state
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
      logOut:() => dispatch({ type: 'LOG_OUT'})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Navbar)