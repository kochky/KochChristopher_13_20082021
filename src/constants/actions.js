import { LOAD_TOKEN, LOAD_TOKEN_SUCCES, LOAD_TOKEN_ERROR,REMEMBER,LOAD_USERINFOS_SUCCES,LOAD_UPDATE_USERINFOS_SUCCES } from "./actionsType"

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
export const loadTokenError= (error)=> {
    return {
        type: LOAD_TOKEN_ERROR,
        payload:error
    }
}
export const loadTokenUserInfoSucces= (firstData,LastData,idData)=> {
    return {
        type: LOAD_USERINFOS_SUCCES,
        firstname:firstData,
        lastname:LastData,
        id:idData,     
    }
}
export const loadChangeInfoSucces= (firstData,LastData)=> {
    return {
        type: LOAD_UPDATE_USERINFOS_SUCCES,
        firstname:firstData,
        lastname:LastData,
        
    }
}

export const loadTokenRememberSucces= ()=> {
    return {
        type: REMEMBER,          
    }
}

