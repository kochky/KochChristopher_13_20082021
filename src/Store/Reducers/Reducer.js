
const initialState = {userdata: []}



function userinfo(state= initialState,action){
    let nextState
    switch(action.type) {
        case 'FETCH_DATA':
            nextState = { 
                ...state,
                userdata: [...state,action.value]
            }
            return nextState
        default:
            return state
    }


}

export default userinfo