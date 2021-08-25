


export const LOAD_TOKEN= 'LOAD_TOKEN'
export const LOAD_TOKEN_SUCCES= 'LOAD_TOKEN_SUCCES'
export const LOAD_TOKEN_ERROR= 'LOAD_TOKEN_ERROR'

export const REMEMBER= 'REMEMBER'
export const LOG_OUT= 'LOG_OUT'




const initialState = (
    {   infos:[],
        firstName:'',
        lastName:'',
        id:'',
        auth:false,
        token:'',
        error:'',
        loading:false,
        
        }
    )



function userinfoReducer(state= initialState,action){
    let nextState
    switch(action.type) {
        case LOAD_TOKEN_SUCCES:
            return { 
                ...state,
                token: action.payload,
                loading:false,
                auth:true,
            }
            
        case REMEMBER:
            return {
                ...state,
                infos: action.email,
                password: action.password
            }

        case LOAD_TOKEN:
            return {
                ...state,
                loading:true,
            }
        
        case LOG_OUT:
          
            return initialState

        case LOAD_TOKEN_ERROR:
            nextState={
                ...state,
                loading:false,
                error:action.payload,
            }
            return nextState
           
        default:
            return state
    }


}

export default userinfoReducer