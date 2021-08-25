import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userinfoReducer from './Reducers/Reducer'


export default createStore(userinfoReducer, applyMiddleware(thunk))