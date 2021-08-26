import { LOAD_TOKEN, LOAD_TOKEN_SUCCES, LOAD_TOKEN_ERROR,REMEMBER,LOAD_TOKEN_USER_SUCCES,LOAD_CHANGE_SUCCES,LOG_OUT } from '../../constants/actionsType'


function initialState () {
    if (Object.keys(localStorage).length>1 ){
        return  {  
             email:localStorage.getItem("email"),
            password:localStorage.getItem("password"),
            firstname:localStorage.getItem("firstname"),
            lastname:localStorage.getItem("lastname"),
            id:localStorage.getItem("id"),
            auth:true,
            token:localStorage.getItem("token"),
            error:'',
            loading:false,
            remember:true
        }
    } else if (Object.keys(sessionStorage).length>1 ){
        return(
            {   email:sessionStorage.getItem("email"),
            password:sessionStorage.getItem("password"),
            firstname:sessionStorage.getItem("firstname"),
            lastname:sessionStorage.getItem("lastname"),
            id:sessionStorage.getItem("id"),
            auth:true,
            token:sessionStorage.getItem("token"),
            error:'',
            loading:false,
            remember:true
        })
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
        case LOAD_TOKEN_USER_SUCCES:
            return { 
                ...state,
                firstname: action.firstname,
                lastname: action.lastname,
                id:action.id,
                error:'',
                loading:false,   
            }
        case LOAD_CHANGE_SUCCES:
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
        case LOAD_TOKEN:
            return {
                ...state,
                loading:true,
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
        case LOAD_TOKEN_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state
    }
}

export default userinfoReducer