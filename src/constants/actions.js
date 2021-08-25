import { LOAD_TOKEN, LOAD_TOKEN_SUCCES, LOAD_TOKEN_ERROR,REMEMBER,LOAD_TOKEN_USER_SUCCES,LOAD_CHANGE_SUCCES } from "./actionsType"

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
export const loadChangeInfoSucces= (firstData,LastData,idData,emailData)=> {
    return {
        type: LOAD_CHANGE_SUCCES,
        firstname:firstData,
        lastname:LastData,
        
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