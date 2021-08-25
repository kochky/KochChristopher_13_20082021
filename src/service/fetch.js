import { LOAD_TOKEN, LOAD_TOKEN_SUCCES, LOAD_TOKEN_ERROR,REMEMBER } from "../Store/Reducers/Reducer"
import axios from 'axios'

export const loadToken= ()=> {
    return {
        type: LOAD_TOKEN
    }
}
export const loadTokenSucces= (data)=> {
    return {
        type: LOAD_TOKEN_SUCCES,
        payload: data,
        
        
    }
}
export const loadTokenRememberSucces= (data,info)=> {
    return {
        type: REMEMBER,
        payload: data,
        infos:info,

        
        
    }
}
export const loadTokenError= (error)=> {
    return {
        type: LOAD_TOKEN_ERROR,
        payload:error
    }
}



export const apiCall = (user,remember) => {
 
	return (dispatch) => {
        dispatch(loadToken())
		
        
        axios.post('http://localhost:3001/api/v1/user/login',user)
     
        .then (res=> {
            if(remember){
                dispatch(loadTokenRememberSucces(res.data.body.token,user))
            }
            dispatch(loadTokenSucces(res.data.body.token))
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
        
  