import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect} from 'react-redux'
import { useDispatch,useStore  } from 'react-redux';
import { useSelector } from "react-redux";
 


async function loginUser(tokenBody) {


  return fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tokenBody)
  })
    .then(data => data.json())
}



function Form () {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false)
    
  const dispatch= useDispatch()

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({ email,password});
    console.log(token)
    if (token.status ===200) {
      dispatch({ type: 'FETCH_DATA', error:false,auth:true, email:email , token:token.body.token,error:null})
    }
 
    else if (token.status ===400){
        dispatch({ type: 'FETCH_DATA', error:"Erreur dans l'username ou le password"})
     
    }else { dispatch({ type: 'FETCH_DATA', error:"Erreur serveur !"})

      }
      
  }
  
    const errorMessage=useSelector((state)=> state.error)

    const auth= useSelector((state)=> state.auth)


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
          <input type="checkbox" id="remember-me" name="remember" value={remember} onChange={e => setRemember(e.target.value)} />
          <label htmlFor="remember-me" >Remember me</label>
        </div>
        <div className="errorMessage">{errorMessage}</div>
        <button className="sign-in-button">Sign In</button>

      </form>
      ):<Redirect to='/user' />
    
}




const mapStateToProps= (state) => { 
    return state
}

export default connect(mapStateToProps)(Form)