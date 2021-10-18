import axios from 'axios'
import {loadToken,loadTokenUserInfoSucces,loadTokenError} from './actions'

export const apiCallUserInfo = (token,state) => {
  
	return (dispatch) => {
        dispatch(loadToken())
        axios.post('http://localhost:3001/api/v1/user/profile',{},
        { headers: { Authorization: `Bearer ${token}` } })
        .then (res=> { 
            dispatch(loadTokenUserInfoSucces(res.data.body.firstName,res.data.body.lastName,res.data.body.id))
        })
        .catch(error => {
            if(error.response.status===400){
                dispatch(loadTokenError("Erreur 400, problème venant du token"))
            }else {
                dispatch(loadTokenError("Erreur provenant du serveur !"))
            } 
        })    
    }
}
