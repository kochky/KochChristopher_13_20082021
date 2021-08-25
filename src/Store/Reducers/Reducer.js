


export const LOAD_TOKEN= 'LOAD_TOKEN'
export const LOAD_TOKEN_SUCCES= 'LOAD_TOKEN_SUCCES'
export const LOAD_TOKEN_USER_SUCCES= 'LOAD_TOKEN_USER_SUCCES'
export const LOAD_TOKEN_ERROR= 'LOAD_TOKEN_ERROR'
export const LOAD_CHANGE_SUCCES= 'LOAD_CHANGE_SUCCES'
export const REMEMBER= 'REMEMBER'
export const LOG_OUT= 'LOG_OUT'




const initialState = (
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
        
        }
    )



function userinfoReducer(state= initialState,action){
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
            return initialState
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