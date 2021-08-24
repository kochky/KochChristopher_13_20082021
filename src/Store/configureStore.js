import { createStore} from 'redux'
import userinfoReducer from './Reducers/Reducer'


const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default createStore(userinfoReducer, reduxDevtools)