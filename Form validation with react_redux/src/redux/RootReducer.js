import {combineReducers} from 'redux';
import userReducer from './userDetails/userReducer';

const rootReducer = combineReducers({
    userDetails:userReducer
})

export default rootReducer;