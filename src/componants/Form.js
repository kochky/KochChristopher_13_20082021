import React, { useState} from 'react';
import { Redirect } from "react-router-dom";
import { useSelector,connect } from "react-redux";
import { apiCallToken } from '../constants/fetchToken';


function Form ({state, apiData}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false)

  const errorMessage=useSelector((state)=> state.error)
  const auth= useSelector((state)=> state.auth)

  const handleSubmit = async e => {
    e.preventDefault();
    apiData({email,password},remember)
   }
    
    return !auth?(

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input required type="email" id="username" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input required type="password" id="password" name="password" value={password}  onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" name="remember" value={remember} onChange={e => setRemember(e.target.checked)} />
          <label htmlFor="remember-me" >Remember me</label>
        </div>
        <div className="error-message">{errorMessage}</div>
        <button className="sign-in-button">Sign In</button>
      </form>
      ):<Redirect to='/user' />
    
}

const mapStateToProps= state => { 
    return state
}

const mapDispatchToProps= dispatch=>{
  return {
    apiData:(user,remember)=>dispatch(apiCallToken(user,remember))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)