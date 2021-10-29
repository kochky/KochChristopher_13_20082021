import { LOAD_TOKEN, LOAD_TOKEN_SUCCES, LOAD_TOKEN_ERROR,REMEMBER,LOAD_USERINFOS_SUCCES,LOAD_UPDATE_USERINFOS_SUCCES,LOG_OUT } from '../../constants/actionsType'


function initialState () {

    if (Object.keys(localStorage).length>0 ){
        return JSON.parse(localStorage.getItem("user"))
    } else if (Object.keys(sessionStorage).length>0 ){
        return JSON.parse(sessionStorage.getItem("user"))
    } else {
        return (
        {   email:'',
            password:'',
            firstname:'',
            lastname:'',
            id:'',
            auth:false,
            token:'',
            error:'',
            loading:false,
            remember:false
        })
    }
}

function userinfoReducer(state= initialState(),action){
    switch(action.type) {
        case LOAD_TOKEN:
            return {
                ...state,
                loading:true,
            }
        case LOAD_TOKEN_SUCCES:
            return { 
                ...state,
                token: action.payload,
                email:action.email,
                password:action.password,
                loading:false,
                auth:true,
                error:''
            }
        case LOAD_TOKEN_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        case LOAD_USERINFOS_SUCCES:
            return { 
                ...state,
                firstname: action.firstname,
                lastname: action.lastname,
                id:action.id,
                error:'',
                loading:false,   
            }
        case LOAD_UPDATE_USERINFOS_SUCCES:
            return { 
                ...state,
                firstname: action.firstname,
                lastname: action.lastname,
                error:'',
                loading:false,   
            }
        case REMEMBER:
            return {
                ...state,
                remember:true
            }
      
        case LOG_OUT:
            return {
                email:'',
                password:'',
                firstname:'',
                lastname:'',
                id:'',
                auth:false,
                token:'',
                error:'',
                loading:false,
                remember:false
            }
       
        default:
            return state
    }
}

export default userinfoReducer