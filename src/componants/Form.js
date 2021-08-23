import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";





async function loginUser(credentials) {
  return fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    
   
 }


function Form ({ setToken }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false)
    
   

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
    console.log(token)
   

   
  }



        return (

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input type="text" id="username" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password}  onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="remember" value={remember} onChange={e => setRemember(e.target.value)} />
            <label htmlFor="remember-me" >Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>

        </form>


        )
    
}

Form.propTypes = {
  setToken: PropTypes.func.isRequired
}




export default Form