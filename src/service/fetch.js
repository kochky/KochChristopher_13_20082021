import { LOAD_TOKEN, LOAD_TOKEN_SUCCES, LOAD_TOKEN_ERROR,REMEMBER,LOAD_TOKEN_USER_SUCCES } from "../Store/Reducers/Reducer"
import axios from 'axios'

export const loadToken= ()=> {
    return {
        type: LOAD_TOKEN
    }
}
export const loadTokenSucces= (data,emailData,emailPassword)=> {
    return {
        type: LOAD_TOKEN_SUCCES,
        payload: data,
        email:emailData,
        password:emailPassword
    }
}
export const loadTokenUserInfoSucces= (firstData,LastData,idData,emailData)=> {
    return {
        type: LOAD_TOKEN_USER_SUCCES,
        firstname:firstData,
        lastname:LastData,
        id:idData,
       
      
    }
}
export const loadTokenRememberSucces= ()=> {
    return {
        type: REMEMBER,          
    }
}
export const loadTokenError= (error)=> {
    return {
        type: LOAD_TOKEN_ERROR,
        payload:error
    }
}


export const apiCallToken = (user,remember) => {console.log(user)
	return (dispatch) => {
        dispatch(loadToken()) 
        axios.post('http://localhost:3001/api/v1/user/login',user)
        .then (res=> {
            if(remember){
                dispatch(loadTokenRememberSucces())
            }
            dispatch(loadTokenSucces(res.data.body.token,user.email,user.password))
        })
        .catch(error => {
            if(error.response.status==400){
                dispatch(loadTokenError("L'adresse mail et/ou le mot de passe sont erronés"))
            }else {
                dispatch(loadTokenError("Erreur provenant du serveur !"))
            }     
        })        
    }
}

export const apiCallUserInfo = (token) => {
 
	return (dispatch) => {
        dispatch(loadToken())
        axios.post('http://localhost:3001/api/v1/user/profile',
        {},
        { headers: { Authorization: `Bearer ${token}` } })
        .then (res=> { 
            dispatch(loadTokenUserInfoSucces(res.data.body.firstName,res.data.body.lastName,res.data.body.id))
        })
        .catch(error => {
            if(error.response.status==400){
                dispatch(loadTokenError("Erreur 400, problème venant du"))
            }else {
                dispatch(loadTokenError("Erreur provenant du serveur !"))
            } 
        })    
    }
}
        
  