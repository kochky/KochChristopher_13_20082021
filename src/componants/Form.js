import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { connect} from 'react-redux'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import LoginUser from '../service/fetchLoginUser'
import PostToken from '../service/fetchPostToken'


function Form () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false)
    
  const dispatch= useDispatch()
  const tokenBody=useSelector((state)=> state.token)
  const errorMessage=useSelector((state)=> state.error)
  const auth= useSelector((state)=> state.auth)
  const isLoading=useSelector((state)=> state.loading)

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({type:'IS_LOADING'})
    const token = await LoginUser({ email,password});
    if (token.status ===200) {
      dispatch({ type: 'FETCH_DATA',token:token.body.token})
      if (!isLoading){
        var userInfo= await PostToken(tokenBody)
        if (userInfo.status===200){
          dispatch({ type: 'FETCH_DATA',auth:true, remember:remember, email:email , error:null, firstName:userInfo.body.firstName, lastName: userInfo.body.lastName, id: userInfo.body.id})
       }
      }
    }
    else if (token.status ===400){
        dispatch({ type: 'ERROR', error:"Erreur dans l'username et/ou le password"})
     
    }else { dispatch({ type: 'ERROR', error:"Erreur serveur ! Réactualiser la page !"})
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