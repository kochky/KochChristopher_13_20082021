import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect} from 'react-redux'
import { useDispatch,useStore  } from 'react-redux';
import { useSelector } from "react-redux";
 


async function loginUser(data) {

  return fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json())
}

async function postToken(tokenBody) {

  return fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenBody}`
        },
  })
    .then(data => data.json())
}


function Form () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false)
    
  const dispatch= useDispatch()
  var tokenBody=useSelector((state)=> state.token)
  const errorMessage=useSelector((state)=> state.error)
  const auth= useSelector((state)=> state.auth)

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({ email,password});
    dispatch({ type: 'FETCH_DATA',token:token.body.token})
    if (token.status ===200) {console.log(token)
      const userInfo= await postToken(tokenBody)
       if (userInfo.status===200){console.log(userInfo)
        dispatch({ type: 'FETCH_DATA',auth:true, email:email , error:null, firstName:userInfo.body.firstName, lastName: userInfo.body.lastName, id: userInfo.body.id})
       }
    }
    else if (token.status ===400){
        dispatch({ type: 'FETCH_DATA', error:"Erreur dans l'username et/ou le password"})
     
    }else { dispatch({ type: 'FETCH_DATA', error:"Erreur serveur !"})
      }    
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
          <input type="checkbox" id="remember-me" name="remember" value={remember} onChange={e => setRemember(e.target.value)} />
          <label htmlFor="remember-me" >Remember me</label>
        </div>
        <div className="error-message">{errorMessage}</div>
        <button className="sign-in-button">Sign In</button>
      </form>
      ):<Redirect to='/user' />
    
}

const mapStateToProps= (state) => { 
    return state
}

export default connect(mapStateToProps)(Form)