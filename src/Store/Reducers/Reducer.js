
const initialState = (
    {   email:'',
        firstName:'',
        lastName:'',
        id:'',
        auth:false,
        token:'',
        error:'',
        loading:false,
        remember:false,
        }
    )



function userinfoReducer(state= initialState,action){
    let nextState
    switch(action.type) {
        case 'FETCH_DATA':
            nextState = { 
                ...state,
                 email: action.email,
                firstName:action.firstName,
                lastName:action.lastName,
                id:action.id,
                auth:action.auth,
                token:action.token,
                remember:action.remember,
                loading:false,
            }
            return nextState

        case 'IS_LOADING':
            nextState={
                ...state,
                loading:true,
            }
            return nextState

        case 'LOG_OUT':
            nextState={
                ...state,
                auth:false,
            }
            return nextState

        case 'ERROR':
            nextState={
                ...state,
                loading:false,
                error:action.error,
            }
            return nextState
            
        default:
            return state
    }


}

export default userinfoReducer