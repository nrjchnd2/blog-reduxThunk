import {combineReducers} from 'redux';
import posts from './postReducer';
import users from './userHeaderReducer';
export default combineReducers({
    posts,
    users
});