import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userinfoReducer from './Reducers/Reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


 const store = createStore(userinfoReducer, 
    composeWithDevTools( applyMiddleware(thunk))
    );

export default store