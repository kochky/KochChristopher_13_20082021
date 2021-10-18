import axios from 'axios'
import {loadToken,loadChangeInfoSucces,loadTokenError} from './actions'

export const apiPutUserInfo = (body,token) => {
	return (dispatch) => {
        dispatch(loadToken())
        axios.put('http://localhost:3001/api/v1/user/profile',body,
        { headers: { Authorization: `Bearer ${token}` } })
        .then (res=> { console.log(res)
            dispatch(loadChangeInfoSucces(res.data.body.firstName,res.data.body.lastName))
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