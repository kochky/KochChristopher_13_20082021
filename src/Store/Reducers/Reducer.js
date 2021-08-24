
const initialState = (
    {   email:'',
        firstName:'',
        lastName:'',
        id:'',
        auth:false,
        token:'',
        error:'',
        }
    )



function userinfo(state= initialState,action){
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
                error:action.error
            }
            return nextState
        default:
            return state
    }


}

export default userinfo