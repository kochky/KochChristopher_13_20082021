import axios from 'axios'
import {loadToken,loadTokenSucces,loadTokenRememberSucces,loadTokenError} from './actions'




export const apiCallToken = (user,remember) => {
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
            if(error.response.status===400){
                dispatch(loadTokenError("L'email et/ou le mot de passe sont erronés"))
            }else {
                dispatch(loadTokenError("Erreur provenant du serveur !"))
            }     
        })        
    }
}