/** 
 * A redux app can have multiple reducers - Here I have made the structure to allow multpile reducers to be imported and passing it to the combineReducers 
*/

import {combineReducers} from "redux";
import users from './userReducers';

export default combineReducers ({
    users
})
